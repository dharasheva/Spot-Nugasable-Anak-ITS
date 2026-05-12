var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TitikLokasi_1 = new ol.format.GeoJSON();
var features_TitikLokasi_1 = format_TitikLokasi_1.readFeatures(json_TitikLokasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikLokasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikLokasi_1.addFeatures(features_TitikLokasi_1);
var lyr_TitikLokasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikLokasi_1, 
                style: style_TitikLokasi_1,
                popuplayertitle: 'Titik Lokasi',
                interactive: true,
                title: '<img src="styles/legend/TitikLokasi_1.png" /> Titik Lokasi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TitikLokasi_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TitikLokasi_1];
lyr_TitikLokasi_1.set('fieldAliases', {'Nama Tempat': 'Nama Tempat', 'Tingkat Kenyamanan': 'Tingkat Kenyamanan', 'Tingkat Kebisingan': 'Tingkat Kebisingan', 'Tingkat Kebersihan': 'Tingkat Kebersihan', 'Kapasitas': 'Kapasitas', 'Kepadatan Pengunjung': 'Kepadatan Pengunjung', 'session': 'session', 'session_id': 'session_id', 'language': 'language', 'validation_status': 'validation_status', });
lyr_TitikLokasi_1.set('fieldImages', {'Nama Tempat': '', 'Tingkat Kenyamanan': '', 'Tingkat Kebisingan': '', 'Tingkat Kebersihan': '', 'Kapasitas': '', 'Kepadatan Pengunjung': '', 'session': '', 'session_id': '', 'language': '', 'validation_status': '', });
lyr_TitikLokasi_1.set('fieldLabels', {'Nama Tempat': 'header label - always visible', 'Tingkat Kenyamanan': 'header label - always visible', 'Tingkat Kebisingan': 'header label - always visible', 'Tingkat Kebersihan': 'header label - always visible', 'Kapasitas': 'header label - always visible', 'Kepadatan Pengunjung': 'header label - always visible', 'session': 'no label', 'session_id': 'no label', 'language': 'no label', 'validation_status': 'no label', });
lyr_TitikLokasi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});