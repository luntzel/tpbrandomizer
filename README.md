# Trailer Park Boys Randomizer

K8s port foward on localhost:

`kubectl port-forward service/tpbrandomizer -n tpb 8081:4000`

Argocd:

`kubectl port-forward svc/argocd-server -n argocd 8080:443`

Get admin password: `kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo`



[![Super-Linter](https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE_NAME>/badge.svg)](https://github.com/marketplace/actions/super-linter)


