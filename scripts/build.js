var path = require('path');
var fs = require('fs');
var taskRunner = require('task-nibbler').nibbler;
var glob = require('glob');

var ROOT_DIR = path.resolve(__dirname, '../');
var TERRAFORM_FILE = ROOT_DIR + '/snippets/terraform.json';

function snippetsProcessor(pathToNewJsonSnippetsFile) {
    return new Promise(function(resolve, reject) {
        try {
            var newSnippetsContent = fs.readFileSync(pathToNewJsonSnippetsFile, {encoding: 'utf8'});

            newSnippetsContent = newSnippetsContent.substring(newSnippetsContent.indexOf('\n') + 1);
            newSnippetsContent = newSnippetsContent.substring(0, newSnippetsContent.lastIndexOf('\n')) + ',';

            fs.appendFile(TERRAFORM_FILE, newSnippetsContent, function(error) {
                resolve();
            });

        } catch (e) {
            console.log(pathToNewJsonSnippetsFile, e);
            reject(e);
        }
    });
}

function doBuild() {
    // @FIXME: temp. solution
    var messageFiller = '\n"copyright": { "year": "2017" } \n}';

    glob(ROOT_DIR + '/src/**/*.json', function(error, files) {
        fs.truncateSync(TERRAFORM_FILE, 0);
        fs.appendFileSync(TERRAFORM_FILE, '{\n');

        taskRunner(files, snippetsProcessor)
        .then(function() {

            fs.appendFile(TERRAFORM_FILE, messageFiller);
        })
        .catch(function(error) {
            console.log('[ERROR]', error);
        });
    });
}

// run json builder
doBuild();