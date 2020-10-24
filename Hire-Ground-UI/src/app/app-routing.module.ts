import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CandidatesComponent } from "../app/modules/candidates/candidates.component";

const routes: Routes = [
  {
    path: "candidates",
    component: CandidatesComponent,
  },
  { path: 'recruiters', loadChildren: () => import('./modules/recruiters/recruiters.module').then(m => m.RecruitersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
