# OPA Gatekeeper
https://github.com/open-policy-agent/gatekeeper

## Install Gatekeeper
```
kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/deploy/gatekeeper.yaml
```
```
kubectl get all -n gatekeeper-system
```

## Add example constraint

```
kubectl apply -f ./templates/constrainttemplate.yml
```
```
kubectl get constrainttemplate
```
```
kubectl apply -f ./templates/k8srequiredlabels.yml
```
```
kubectl get constrainttemplate,k8srequiredlabels
```
```
kubectl create namespace blah
```
```
kubectl describe k8srequiredlabels
```

## Remove example constraint

```
kubectl delete -f ./templates/k8srequiredlabels.yml
```
```
kubectl create namespace blah
```


## Uninstall Gatekeeper

kubectl delete -f ./templates/
kubectl delete -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/deploy/gatekeeper.yaml