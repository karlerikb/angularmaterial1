import { NgModule } from '@angular/core';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule, MatSliderModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatSlideToggleModule,
        BrowserAnimationsModule
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule
        MatSlideToggleModule,
        BrowserAnimationsModule
    ]
})
export class MaterialModule {}