# Introduction to Helm

## Installing the Helm CLI
https://helm.sh/docs/intro/install/

## Difference between v2 and v3
https://helm.sh/docs/topics/v2_v3_migration/

### Helm 2to3 migration plugin
https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/


## Creating a chart

```console
helm create example-app
```

```console
helm template ./example-app
```

### Install helm release
Simple install
```console
helm upgrade --install example-app ./example-app
```

Advance install
```console
helm upgrade --install example-app ./example-app --set serviceAccount.create=false --set ingress.enabled=true
```

### List installed helm releases
```console
helm ls
```
### Uninstall helm release
```console
helm uninstall example-app
```

## Running tests
After a deployment

```console
helm test example-app
```