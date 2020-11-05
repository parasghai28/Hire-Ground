import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesComponent } from './candidates.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProfileCardComponent } from './../../shared/components/profile-card/profile-card.component';
@NgModule({
  declarations: [CandidatesComponent, ProfileCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CandidatesModule {}
