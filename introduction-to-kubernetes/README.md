# Kubernetes

## What is Kubernetes
- Master
  - Kubelet
- Nodes

### What is AKS
https://azure.microsoft.com/en-gb/services/kubernetes-service/

## Types of workloads

### Deployments
https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

### Replica Sets
https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/

### Daemon Sets
https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/

### Cron Jobs
https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/

## Deploying an app

```console
kubectl apply -f ./templates/
```

To remove
```console
kubectl delete -f ./templates/
```

## Debugging your app
### Viewing deployments
```
kubectl get deployment
```
### Viewing pods

```console
kubectl get pods
```

### Viewing nodes
```console
kubectl get nodes
```

### Troubleshooting
kubectl get, describe, events, logs

```console
kubectl describe pod <pod name>
```

```console
kubectl logs <pod name>
```

```
kubectl get events
```
## Viewing your app

### Services
https://kubernetes.io/docs/concepts/services-networking/service/

```console
kubectl get services
```

https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/
```console
kubectl port-forward service/<service name> <my port>:<remote port>
```
### Ingress
https://kubernetes.io/docs/concepts/services-networking/ingress/

```console
kubectl get ingress
```

https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/

https://github.com/kubernetes/ingress-nginx/blob/master/README.md

### Nginx ingress
    - Certificates
    - Authentication / OAuth

## Updating your app
- Scaling

```console
kubectl scale --replicas=5 deploy/<deployment name>
```
