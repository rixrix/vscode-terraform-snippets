# Terraform Snippets for Visual Studio Code

This extension for Visual Studio Code adds snippets for Terraform.

## Help

> There's massive list of things to do with this snippets generator, I'd be happy to accept your `pull request` and with your name in credits section. The example is pretty easy to follow. Thanks

## Usage
Type part of the snippets `tf`, press `enter`:

### Terraform Snippets

```bash
tf-variable             // generates `variable "myVariable" { }`
tf-variable-default     // generates `variable "myVariable" { default = ""}`
tf-output               // generates `output "myOutName" { value = ""}`
tf-module               // generates `module "myModuleName" { source = ""}`
tf-resource             // generates `resource "" "myResourceName" { }`
tf-provider             // generates `provider "aws" { }`
tf-aws_ami              // get the ID of a registered AMI
```

![Use Extension](https://raw.githubusercontent.com/rixrix/vscode-terraform-snippets/master/images/screenshot.png)

Alternatively, press `Ctrl`+`Space` (Windows, Linux) or `Cmd`+`Space` (OSX) to activate snippets from within the editor.

## Requirements / Dependencies

Install the [Terraform Language](https://marketplace.visualstudio.com/items?itemName=mauve.terraform) support extension from the marketplace published by "Mikael Olenfalk"

## Installation

1. Install Visual Studio Code 1.x or higher
2. Launch Code
3. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
4. Select `Install Extension`
5. Choose the extension
6. Reload Visual Studio Code

## Done

* [Input variables](https://www.terraform.io/intro/getting-started/variables.html)
* [Output Variables](https://www.terraform.io/intro/getting-started/outputs.html)
* [Modules](https://www.terraform.io/intro/getting-started/modules.html)
* [Resource/Provisioner](https://www.terraform.io/intro/getting-started/provision.html)
* Provider eg. `provider "aws" { } `
* AWS - [Data Sources](https://www.terraform.io/docs/providers/aws/d/acm_certificate.html), [API Gateway Resources](https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html)

## Todo

A massive list of things to add

### Providers

* Archive
* Atlas
* AWS
* Bitbucket
* Chef
* CenturyLinkCloud
* CloudFlare
* CloudStack
* Cobbler
* Consul
* Datadog
* DigitalOcean
* DNSMadeEasy
* DNSimple
* Docker
* Dyn
* GitHub
* Fastly
* Google Cloud
* Grafana
* Heroku
* InfluxDB
* Librato
* Logentries
* Mailgun
* Microsoft Azure
* Microsoft Azure (Legacy ASM)
* MySQL
* OpenStack
* Packet
* PagerDuty
* PostgreSQL
* PowerDNS
* RabbitMQ
* Random
* Rundeck
* StatusCake
* SoftLayer
* Scaleway
* Template
* Terraform
* TLS
* Triton
* UltraDNS
* VMware vCloud Director
* VMware vSphere

### Provisioners

* chef
* connection
* file
* local-exec
* remote-exec
* null_resource

### Modules (Sources)

* Local file paths
* GitHub
* Bitbucket
* Generic Git, Mercurial repositories
* HTTP URLs
* S3 buckets

### Credits

* <your name here>