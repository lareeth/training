# Kubernetes

## What is Kubernetes
- Master
  - Kubelet
- Nodes
- What is AKS
  - Shared responsability

## Types of workloads
- Deployments
  - Replica Sets
- Daemon Sets
- Cron Jobs

## Deploying an app
- Kubectl templates
- Helm templates

## Debugging your app
- Viewing pods

```
kubectl get pods
```
- Viewing nodes
```
kubectl get nodes
```

```
kubectl get nodes -o wide
```
- Troubleshooting
  - kubectl get, describe, events, logs

```
kubectl describe pod <pod name>
```

```
kubectl logs <pod name>
```

```
kubectl get events
```
## Viewing your app
- Services
```
kubectl get services
```

https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/
```
kubectl port-forward service/<service name> <my port>:<remote port>
```
- Ingress
```
kubectl get ingress
```

https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/

https://github.com/kubernetes/ingress-nginx/blob/master/README.md

  - Nginx ingress
    - Certificates
    - Authentication / OAuth

## Updating your app
- Scaling

```
kubectl scale --replicas=5 deploy/<deployment name>
```
