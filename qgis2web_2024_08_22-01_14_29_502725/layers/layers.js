var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_route_1 = new ol.format.GeoJSON();
var features_route_1 = format_route_1.readFeatures(json_route_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_1.addFeatures(features_route_1);
var lyr_route_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_route_1, 
                style: style_route_1,
                popuplayertitle: "route",
                interactive: true,
                title: '<img src="styles/legend/route_1.png" /> route'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_route_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_route_1];
lyr_route_1.set('fieldAliases', {'id': 'id', });
lyr_route_1.set('fieldImages', {'id': 'TextEdit', });
lyr_route_1.set('fieldLabels', {'id': 'no label', });
lyr_route_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});