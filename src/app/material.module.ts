import { NgModule } from '@angular/core';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, MatListModule, MatChipsModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSlideToggleModule,
        MatListModule,
        MatChipsModule
       
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSlideToggleModule,
        MatListModule,
        MatChipsModule
        
    ]
})
export class MaterialModule {}