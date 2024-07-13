# AuthenticationApp

1) Workspace creation.
npx create-nx-workspace authentication-app (with nestjs)

2) Backend setup
i) Create auth-service (nestjs)

nx g @nx/nest:application backend-auth-service  --directory apps/backend/auth-service

ii) Create common lib (nestjs)
nx g @nx/nest:library backend-common --directory libs/backend/common

3) Frontend setup

i) Add nextjs support
nx add @nx/next 
nx add @nx/storybook

ii) Create frontend dashboard (nestjs)
nx g @nx/next:application frontend-dashboard  --directory apps/frontend/dashboard 

iii) Create component library.
nx g @nx/next:library frontend-ui-element --directory libs/frontend/ui-element

(iv)
nx g @nx/storybook:configuration --project=frontend-ui-element

