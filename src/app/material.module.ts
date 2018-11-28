import { NgModule } from '@angular/core';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, MatListModule } from '@angular/material';

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
        MatListModule
       
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
        MatListModule
        
    ]
})
export class MaterialModule {}