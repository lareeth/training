# Introduction to Helm

## Installing the Helm CLI
https://helm.sh/docs/intro/install/

## Difference between v2 and v3



## Creating a chart

```
helm create example-app
```

```
helm template .
```

Simple install
```
helm upgrade --install example-app .
```

Advance install
```
helm upgrade --install example-app . --set serviceAccount.create=false --set ingress.enabled=true
```


```
helm uninstall example-app
```

## Running tests
After a deployment

```
helm test example-app
```

- Helm Advance
  - Upgrade
  - App version