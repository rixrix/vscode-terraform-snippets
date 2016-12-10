# Terraform Snippets for Visual Studio Code

Provides complete snippets of Hashicorp's Terraform cloud orchestration tool for Visual Studio Code.

## Usage
Type part of the snippets `tf`, press `enter`:

### Sample Snippets

These are common snippets you can use across other providers, provisioners, etc.

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
tf-provider                         // generates `provider "aws" { }`
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

* [Resource](https://www.terraform.io/intro/getting-started/provision.html)
* Provisioner - [connection](https://www.terraform.io/docs/provisioners/connection.html), [file](https://www.terraform.io/docs/provisioners/file.html), [local-exec](https://www.terraform.io/docs/provisioners/local-exec.html), [remote-exec](https://www.terraform.io/docs/provisioners/remote-exec.html), [null_resource](https://www.terraform.io/docs/provisioners/null_resource.html)
* Template for [file](https://www.terraform.io/docs/providers/template/d/file.html) and [cloudinit](https://www.terraform.io/docs/providers/template/d/cloudinit_config.html)

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

## Requirements / Dependencies

Install the [Terraform Language](https://marketplace.visualstudio.com/items?itemName=mauve.terraform) support extension from the marketplace published by "Mikael Olenfalk"

## Installation

1. Install Visual Studio Code 1.x or higher
2. Launch Code
3. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
4. Select `Install Extension`
5. Choose the extension
6. Reload Visual Studio Code

## Help

> There's massive list of things to do with this snippets generator, I'd be happy to accept your `pull request` and with your name in credits section. The example is pretty easy to follow. Thanks

## Todo

### Providers

* Microsoft Azure (Legacy ASM)

### Provisioners

* chef

### Credits

* "your name here"