import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidatesComponent } from "../app/modules/candidates/candidates.component";

const routes: Routes = [
  {
    path: "candidates",
    component: CandidatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
