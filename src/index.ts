import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MapComponent, ViewComponent, GraticuleComponent,
  LayerGroupComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, LayerImageComponent,
  SourceBingmapsComponent, SourceClusterComponent, SourceOsmComponent, SourceVectorComponent, SourceVectorTileComponent, SourceXYZComponent, SourceTileWMSComponent,
  SourceGeoJSONComponent, SourceTileWMTSComponent, SourceImageStaticComponent, SourceImageWMSComponent, FeatureComponent,
  GeometryLinestringComponent, GeometryPointComponent, GeometryPolygonComponent,
  CollectionCoordinatesComponent, CoordinateComponent,
  StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent,
  ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent,
  ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent,
  ControlZoomToExtentComponent, DefaultControlComponent, ControlComponent,
  FormatMVTComponent,
  TileGridComponent, TileGridWMTSComponent,
  DefaultInteractionComponent, DragRotateInteractionComponent, DragRotateAndZoomInteractionComponent,
  DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent,
  DragPanInteractionComponent, DragZoomInteractionComponent, MouseWheelZoomInteractionComponent,
  PinchZoomInteractionComponent,  DrawInteractionComponent, SelectInteractionComponent, ModifyInteractionComponent, TranslateInteractionComponent,
  OverlayComponent,
  ContentComponent,
  AttributionComponent,
  AttributionsComponent
} from './components';

export * from './components';

const COMPONENTS = [
  MapComponent,

  ViewComponent,
  GraticuleComponent,

  LayerGroupComponent,
  LayerImageComponent,
  LayerTileComponent,
  LayerVectorComponent,
  LayerVectorTileComponent,

  SourceOsmComponent,
  SourceBingmapsComponent,
  SourceClusterComponent,
  SourceVectorComponent,
  SourceXYZComponent,
  SourceVectorTileComponent,
  SourceTileWMSComponent,
  SourceTileWMTSComponent,
  SourceGeoJSONComponent,
  SourceImageStaticComponent,
  SourceImageWMSComponent,
  FeatureComponent,
  GeometryLinestringComponent,
  GeometryPointComponent,
  GeometryPolygonComponent,
  CoordinateComponent,
  CollectionCoordinatesComponent,

  StyleComponent,
  StyleCircleComponent,
  StyleFillComponent,
  StyleIconComponent,
  StyleStrokeComponent,
  StyleTextComponent,

  DefaultControlComponent,
  ControlComponent,
  ControlAttributionComponent,
  ControlFullScreenComponent,
  ControlMousePositionComponent,
  ControlOverviewMapComponent,
  ControlRotateComponent,
  ControlScaleLineComponent,
  ControlZoomComponent,
  ControlZoomSliderComponent,
  ControlZoomToExtentComponent,

  FormatMVTComponent,
  TileGridComponent,
  TileGridWMTSComponent,

  DefaultInteractionComponent,
  DoubleClickZoomInteractionComponent,
  DragAndDropInteractionComponent,
  DragBoxInteractionComponent,
  DragPanInteractionComponent,
  DragRotateInteractionComponent,
  DragRotateAndZoomInteractionComponent,
  DragZoomInteractionComponent,
  MouseWheelZoomInteractionComponent,
  PinchZoomInteractionComponent,
  DrawInteractionComponent,
  SelectInteractionComponent,
  ModifyInteractionComponent,
  TranslateInteractionComponent,

  OverlayComponent,
  ContentComponent,
  AttributionComponent,
  AttributionsComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class AngularOpenlayersModule { }
