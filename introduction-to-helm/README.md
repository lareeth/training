# Introduction to Helm

## Installing the Helm CLI
https://helm.sh/docs/intro/install/

## Difference between v2 and v3



## Creating a chart

```console
helm create example-app
```

```console
helm template .
```

Simple install
```console
helm upgrade --install example-app .
```

Advance install
```console
helm upgrade --install example-app . --set serviceAccount.create=false --set ingress.enabled=true
```


```console
helm uninstall example-app
```

## Running tests
After a deployment

```console
helm test example-app
```

- Helm Advance
  - Upgrade
  - App version