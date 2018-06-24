# News
> ## I'm looking for volunteers to help me maintain this project. I don't have enough time to do some of the work.

# Advanced Terraform Snippets for Visual Studio Code

Provides **550+** code snippets of Hashicorp's [Terraform](https://www.terraform.io/) cloud orchestration tool for [Visual Studio Code](https://code.visualstudio.com/).

## Usage
Type part of the snippets `tf`, press `enter`:

### Sample Snippets

#### Input / Output / Module
```bash
tf-variable                         // generates `variable "myVariable" { }`
tf-variable-default                 // generates `variable "myVariable" { default = ""}`
tf-output                           // generates `output "myOutputName" { value = ""}`
tf-module                           // generates `module "myModuleName" { source = ""}`
tf-module-github                    // generates `module "myModuleName" { source = "github.com/username"}`
tf-module-github-private            // generates `module "myModuleName" { source = "git::https://MACHINE-USER:MACHINE-PASS@github.com/username"}`
tf-module-bitbucket                 // generates `module "myModuleName" { source = "bitbucket.org/username"}`
tf-module-git                       // generates `module "myModuleName" { source = "git://"}`
tf-module-mercurial                 // generates `module "myModuleName" { source = "hg::http://"}`
tf-module-s3                        // generates `module "myModuleName" { source = "s3::https://"}`
```

#### Providers

```bash
tf-aws                              // generates `provider "aws" { ... }`
tf-aws-profile                       // generates `provider "aws" { profile = "", shared_credentials_file="",... }`
tf-azurerm                          // generates `provider "azurerm" { ... }`
tf-google                           // generates `provider "google" { ... }`
tf-openstack                        // generates `provider "openstack" { ... }`
tf-ibm_provider                     // generates `provider "ibm" { ... }`
```

#### Backends / Remote State

```bash
tf-backend-azure                    // generates `data "terraform_remote_state" "xxx" { backend = "azure" ... }`
tf-backend-s3                       // generates `data "terraform_remote_state" "xxx" { backend = "s3" ... }`
tf-backend-gcs                      // generates `data "terraform_remote_state" "xxx" { backend = "gcs" ... }`
tf-backend-consul                   // generates `data "terraform_remote_state" "xxx" { backend = "consul" ... }`
```
#### Handy shortcuts for AWS Regions

```bash
tf-aws-region-us-east-1             // generates US East (N.Virginia) `us-east-1`
tf-aws-region-ap-south-1            // generates Asia Pacific (Mumbai) `ap-south-1`

plus all other AWS regions

```

#### Others + more, see supported list
```bash
tf-depends_on                       // generates `depends_on []`
tf-provisioner-connection           // generates `provisioner "file" { ... }`
tf-provisioner-file                 // generates `provisioner "file" { ... }`
tf-provisioner-local-exec           // generates `provisioner "local-exec" { ... }`
tf-provisioner-remote-exec          // generates `provisioner "remote-exec" { ... }`
tf-provisioner-null_resource        // generates `resource "null_resource" { ... }`
tf-template_file                    // generates `data "template_file" "init" { ... }`
tf-template_file-inline             // generates `data "template_file" "init" { ... }` inline
tf-template_cloudinit_config        // generates `data "template_cloudinit_config" "config" { ... }` inline
```

![Use Extension](https://raw.githubusercontent.com/rixrix/vscode-terraform-snippets/master/images/screenshot.png)

Alternatively, press `Ctrl`+`Space` (Windows, Linux) or `Cmd`+`Space` (OSX) to activate snippets from within the editor.

## Supported Snippets

### Input, Output, Module

* [Input variables](https://www.terraform.io/intro/getting-started/variables.html)
* [Output Variables](https://www.terraform.io/intro/getting-started/outputs.html)
* [Modules](https://www.terraform.io/intro/getting-started/modules.html)

### Provisioners

* [Resource](https://www.terraform.io/intro/getting-started/provision.html), [connection](https://www.terraform.io/docs/provisioners/connection.html), [file](https://www.terraform.io/docs/provisioners/file.html), [local-exec](https://www.terraform.io/docs/provisioners/local-exec.html), [remote-exec](https://www.terraform.io/docs/provisioners/remote-exec.html)
* [null_resource](https://www.terraform.io/docs/provisioners/null_resource.html), [file](https://www.terraform.io/docs/providers/template/d/file.html), [cloudinit](https://www.terraform.io/docs/providers/template/d/cloudinit_config.html), [Chef provisioner](https://www.terraform.io/docs/provisioners/chef.html)

### Providers

* Amazon Web Services, Google Cloud, Microsoft Azure, CloudStack
* Consul, Docker, Heroku, DigitalOcean, Bitbucket
* GitHub, Archive, Atlas, Chef, Cloudflare
* MySQL, PostgreSQL, SoftLayer, Scaleway, CenturyLinkCloud
* Cobbler, Datadog, DNSMadeEasy, DNSimple, Dyn
* Fastly, Grafana, InfluxDB, Librato, Logentries
* Mailgun, Packet, PagerDuty, PowerDNS, RabbitMQ
* Random, Rundeck, StatusCake, Terraform, TLS,
* Triton, UltraDNS, OpenStack, VMware vCloud Director, VMware vSphere
* GitLab, Arukas, New Relic, Kubernetes, Vault, OpsGenie, IBM Cloud

### Backends / Remote State

* Artifactory, Atlas, Microsoft Azure Storage, Consul, Etcd,
* Google Cloud Storage, Http, Local, Manta, Amazon S3, Openstack Swift

## Requirements / Dependencies

Install the [Terraform Language](https://marketplace.visualstudio.com/items?itemName=mauve.terraform) support extension from the marketplace published by "Mikael Olenfalk"

## Installation

1. Install Visual Studio Code 1.x or higher
2. Launch Code
3. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
4. Select `Install Extension`
5. Choose the extension
6. Reload Visual Studio Code

## Development

### How to build

- `npm run build:snippets`
  - Generates a single file in "snippets/terraform.json" from "src/" snippets file.

### Convention
  - All commit logs must follow the "Conventional Changelog" convention, particularly "angular" preset. see https://github.com/conventional-changelog/conventional-changelog

## How can you help ?

It is super easy, the snippets for each Terraform features are self-contained into its own single JSON file.

```
src/
    backends/
    configuration/
    modules/
    state/
    provisioners/
    providers/
        aws.json
        chef.json
        your-new-feature-here.json
```

## Issues / Comments / Suggestions

Feel free to file an issue or submit a pull request at https://github.com/rixrix/vscode-terraform-snippets/issues

## Notes

* Microsoft Azure (Legacy ASM) is not included in this release due to [inactivity of development](https://www.terraform.io/docs/providers/azure/index.html).

## Contributors

* [Lionel T.](https://github.com/lktslionel)
* [madole](https://github.com/madole)

## License

MIT
