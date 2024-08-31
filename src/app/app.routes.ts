import { Routes } from '@angular/router';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                // //Before Lazy Loading
                // component: ListComponent
                // //After Lazy Loading
                // //sin export default en el componente
                // loadComponent: () => import('./domains/products/pages/list/list.component')
                // .then(m => m.ListComponent),
                // //con export default en el componente
                loadComponent: () => import('./domains/products/pages/list/list.component'),
            },
            {
                path: 'about',
                // component: AboutComponent
                loadComponent: () => import('./domains/info/pages/about/about.component'),
            },
            {
                path: 'product/:id',
                // component: ProductDetailComponent
                loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component'),
            }        
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
