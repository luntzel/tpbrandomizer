# Trailer Park Boys Randomizer

K8s port foward on localhost:

`kubectl port-forward service/tpbrandomizer -n tpb 8081:4000`


kubectl apply -f create-service-cccount.yaml
kubectl apply -f create-cluster-role-binding.yaml
kubectl -n kubernetes-dashboard create token admin-user


Argocd:

`kubectl port-forward svc/argocd-server -n argocd 8080:443`

Get admin password: `kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo`






