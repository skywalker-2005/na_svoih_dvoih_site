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
var format_psenodah_1 = new ol.format.GeoJSON();
var features_psenodah_1 = format_psenodah_1.readFeatures(json_psenodah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_psenodah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_psenodah_1.addFeatures(features_psenodah_1);
var lyr_psenodah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_psenodah_1, 
                style: style_psenodah_1,
                popuplayertitle: "psenodah",
                interactive: true,
                title: '<img src="styles/legend/psenodah_1.png" /> psenodah'
            });
var format_achips_2 = new ol.format.GeoJSON();
var features_achips_2 = format_achips_2.readFeatures(json_achips_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_achips_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_achips_2.addFeatures(features_achips_2);
var lyr_achips_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_achips_2, 
                style: style_achips_2,
                popuplayertitle: "achips",
                interactive: true,
                title: '<img src="styles/legend/achips_2.png" /> achips'
            });
var format_medv_vor_3 = new ol.format.GeoJSON();
var features_medv_vor_3 = format_medv_vor_3.readFeatures(json_medv_vor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medv_vor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medv_vor_3.addFeatures(features_medv_vor_3);
var lyr_medv_vor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_medv_vor_3, 
                style: style_medv_vor_3,
                popuplayertitle: "medv_vor",
                interactive: true,
                title: '<img src="styles/legend/medv_vor_3.png" /> medv_vor'
            });
var format_uzurub_4 = new ol.format.GeoJSON();
var features_uzurub_4 = format_uzurub_4.readFeatures(json_uzurub_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uzurub_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uzurub_4.addFeatures(features_uzurub_4);
var lyr_uzurub_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uzurub_4, 
                style: style_uzurub_4,
                popuplayertitle: "uzurub",
                interactive: true,
                title: '<img src="styles/legend/uzurub_4.png" /> uzurub'
            });
var format_k_moryu_5 = new ol.format.GeoJSON();
var features_k_moryu_5 = format_k_moryu_5.readFeatures(json_k_moryu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_k_moryu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_k_moryu_5.addFeatures(features_k_moryu_5);
var lyr_k_moryu_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_k_moryu_5, 
                style: style_k_moryu_5,
                popuplayertitle: "k_moryu",
                interactive: true,
                title: '<img src="styles/legend/k_moryu_5.png" /> k_moryu'
            });
var format_cherez_gory_6 = new ol.format.GeoJSON();
var features_cherez_gory_6 = format_cherez_gory_6.readFeatures(json_cherez_gory_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cherez_gory_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cherez_gory_6.addFeatures(features_cherez_gory_6);
var lyr_cherez_gory_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cherez_gory_6, 
                style: style_cherez_gory_6,
                popuplayertitle: "cherez_gory",
                interactive: true,
                title: '<img src="styles/legend/cherez_gory_6.png" /> cherez_gory'
            });
var format_engelman_7 = new ol.format.GeoJSON();
var features_engelman_7 = format_engelman_7.readFeatures(json_engelman_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_engelman_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_engelman_7.addFeatures(features_engelman_7);
var lyr_engelman_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_engelman_7, 
                style: style_engelman_7,
                popuplayertitle: "engelman",
                interactive: true,
                title: '<img src="styles/legend/engelman_7.png" /> engelman'
            });
var format_cherez_pereval_8 = new ol.format.GeoJSON();
var features_cherez_pereval_8 = format_cherez_pereval_8.readFeatures(json_cherez_pereval_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cherez_pereval_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cherez_pereval_8.addFeatures(features_cherez_pereval_8);
var lyr_cherez_pereval_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cherez_pereval_8, 
                style: style_cherez_pereval_8,
                popuplayertitle: "cherez_pereval",
                interactive: true,
                title: '<img src="styles/legend/cherez_pereval_8.png" /> cherez_pereval'
            });
var format_krasn_pol_9 = new ol.format.GeoJSON();
var features_krasn_pol_9 = format_krasn_pol_9.readFeatures(json_krasn_pol_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_krasn_pol_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_krasn_pol_9.addFeatures(features_krasn_pol_9);
var lyr_krasn_pol_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_krasn_pol_9, 
                style: style_krasn_pol_9,
                popuplayertitle: "krasn_pol",
                interactive: true,
                title: '<img src="styles/legend/krasn_pol_9.png" /> krasn_pol'
            });
var format_po_doline_10 = new ol.format.GeoJSON();
var features_po_doline_10 = format_po_doline_10.readFeatures(json_po_doline_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_po_doline_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_po_doline_10.addFeatures(features_po_doline_10);
var lyr_po_doline_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_po_doline_10, 
                style: style_po_doline_10,
                popuplayertitle: "po_doline",
                interactive: true,
                title: '<img src="styles/legend/po_doline_10.png" /> po_doline'
            });
var format_sarykum_11 = new ol.format.GeoJSON();
var features_sarykum_11 = format_sarykum_11.readFeatures(json_sarykum_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sarykum_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sarykum_11.addFeatures(features_sarykum_11);
var lyr_sarykum_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sarykum_11, 
                style: style_sarykum_11,
                popuplayertitle: "sarykum",
                interactive: true,
                title: '<img src="styles/legend/sarykum_11.png" /> sarykum'
            });
var format_markova_12 = new ol.format.GeoJSON();
var features_markova_12 = format_markova_12.readFeatures(json_markova_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_markova_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_markova_12.addFeatures(features_markova_12);
var lyr_markova_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_markova_12, 
                style: style_markova_12,
                popuplayertitle: "markova",
                interactive: true,
                title: '<img src="styles/legend/markova_12.png" /> markova'
            });
var format_yuzhny_13 = new ol.format.GeoJSON();
var features_yuzhny_13 = format_yuzhny_13.readFeatures(json_yuzhny_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yuzhny_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yuzhny_13.addFeatures(features_yuzhny_13);
var lyr_yuzhny_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yuzhny_13, 
                style: style_yuzhny_13,
                popuplayertitle: "yuzhny",
                interactive: true,
                title: '<img src="styles/legend/yuzhny_13.png" /> yuzhny'
            });
var format_severny_14 = new ol.format.GeoJSON();
var features_severny_14 = format_severny_14.readFeatures(json_severny_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_severny_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_severny_14.addFeatures(features_severny_14);
var lyr_severny_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_severny_14, 
                style: style_severny_14,
                popuplayertitle: "severny",
                interactive: true,
                title: '<img src="styles/legend/severny_14.png" /> severny'
            });
var format_leymi_15 = new ol.format.GeoJSON();
var features_leymi_15 = format_leymi_15.readFeatures(json_leymi_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leymi_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leymi_15.addFeatures(features_leymi_15);
var lyr_leymi_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leymi_15, 
                style: style_leymi_15,
                popuplayertitle: "leymi",
                interactive: true,
                title: '<img src="styles/legend/leymi_15.png" /> leymi'
            });
var format_egikal_16 = new ol.format.GeoJSON();
var features_egikal_16 = format_egikal_16.readFeatures(json_egikal_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_egikal_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_egikal_16.addFeatures(features_egikal_16);
var lyr_egikal_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_egikal_16, 
                style: style_egikal_16,
                popuplayertitle: "egikal",
                interactive: true,
                title: '<img src="styles/legend/egikal_16.png" /> egikal'
            });
var format_hamhi_17 = new ol.format.GeoJSON();
var features_hamhi_17 = format_hamhi_17.readFeatures(json_hamhi_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hamhi_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hamhi_17.addFeatures(features_hamhi_17);
var lyr_hamhi_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hamhi_17, 
                style: style_hamhi_17,
                popuplayertitle: "hamhi",
                interactive: true,
                title: '<img src="styles/legend/hamhi_17.png" /> hamhi'
            });
var format_targim_18 = new ol.format.GeoJSON();
var features_targim_18 = format_targim_18.readFeatures(json_targim_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_targim_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_targim_18.addFeatures(features_targim_18);
var lyr_targim_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_targim_18, 
                style: style_targim_18,
                popuplayertitle: "targim",
                interactive: true,
                title: '<img src="styles/legend/targim_18.png" /> targim'
            });
var format_sosnovaya_19 = new ol.format.GeoJSON();
var features_sosnovaya_19 = format_sosnovaya_19.readFeatures(json_sosnovaya_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sosnovaya_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sosnovaya_19.addFeatures(features_sosnovaya_19);
var lyr_sosnovaya_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sosnovaya_19, 
                style: style_sosnovaya_19,
                popuplayertitle: "sosnovaya",
                interactive: true,
                title: '<img src="styles/legend/sosnovaya_19.png" /> sosnovaya'
            });
var format_oblepihovaya_20 = new ol.format.GeoJSON();
var features_oblepihovaya_20 = format_oblepihovaya_20.readFeatures(json_oblepihovaya_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oblepihovaya_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oblepihovaya_20.addFeatures(features_oblepihovaya_20);
var lyr_oblepihovaya_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_oblepihovaya_20, 
                style: style_oblepihovaya_20,
                popuplayertitle: "oblepihovaya",
                interactive: true,
                title: '<img src="styles/legend/oblepihovaya_20.png" /> oblepihovaya'
            });
var format_thaba_21 = new ol.format.GeoJSON();
var features_thaba_21 = format_thaba_21.readFeatures(json_thaba_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thaba_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thaba_21.addFeatures(features_thaba_21);
var lyr_thaba_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thaba_21, 
                style: style_thaba_21,
                popuplayertitle: "thaba",
                interactive: true,
                title: '<img src="styles/legend/thaba_21.png" /> thaba'
            });
var format_mizhirgi_22 = new ol.format.GeoJSON();
var features_mizhirgi_22 = format_mizhirgi_22.readFeatures(json_mizhirgi_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mizhirgi_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mizhirgi_22.addFeatures(features_mizhirgi_22);
var lyr_mizhirgi_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mizhirgi_22, 
                style: style_mizhirgi_22,
                popuplayertitle: "mizhirgi",
                interactive: true,
                title: '<img src="styles/legend/mizhirgi_22.png" /> mizhirgi'
            });
var format_boran_23 = new ol.format.GeoJSON();
var features_boran_23 = format_boran_23.readFeatures(json_boran_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boran_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boran_23.addFeatures(features_boran_23);
var lyr_boran_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boran_23, 
                style: style_boran_23,
                popuplayertitle: "boran",
                interactive: true,
                title: '<img src="styles/legend/boran_23.png" /> boran'
            });
var format_k_narz_24 = new ol.format.GeoJSON();
var features_k_narz_24 = format_k_narz_24.readFeatures(json_k_narz_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_k_narz_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_k_narz_24.addFeatures(features_k_narz_24);
var lyr_k_narz_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_k_narz_24, 
                style: style_k_narz_24,
                popuplayertitle: "k_narz",
                interactive: true,
                title: '<img src="styles/legend/k_narz_24.png" /> k_narz'
            });
var format_k_ledniku_25 = new ol.format.GeoJSON();
var features_k_ledniku_25 = format_k_ledniku_25.readFeatures(json_k_ledniku_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_k_ledniku_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_k_ledniku_25.addFeatures(features_k_ledniku_25);
var lyr_k_ledniku_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_k_ledniku_25, 
                style: style_k_ledniku_25,
                popuplayertitle: "k_ledniku",
                interactive: true,
                title: '<img src="styles/legend/k_ledniku_25.png" /> k_ledniku'
            });
var format_33_26 = new ol.format.GeoJSON();
var features_33_26 = format_33_26.readFeatures(json_33_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_26.addFeatures(features_33_26);
var lyr_33_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_26, 
                style: style_33_26,
                popuplayertitle: "33",
                interactive: true,
                title: '<img src="styles/legend/33_26.png" /> 33'
            });
var format_azhek_27 = new ol.format.GeoJSON();
var features_azhek_27 = format_azhek_27.readFeatures(json_azhek_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_azhek_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_azhek_27.addFeatures(features_azhek_27);
var lyr_azhek_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_azhek_27, 
                style: style_azhek_27,
                popuplayertitle: "azhek",
                interactive: true,
                title: '<img src="styles/legend/azhek_27.png" /> azhek'
            });
var format_agurskie_28 = new ol.format.GeoJSON();
var features_agurskie_28 = format_agurskie_28.readFeatures(json_agurskie_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agurskie_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agurskie_28.addFeatures(features_agurskie_28);
var lyr_agurskie_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agurskie_28, 
                style: style_agurskie_28,
                popuplayertitle: "agurskie",
                interactive: true,
                title: '<img src="styles/legend/agurskie_28.png" /> agurskie'
            });
var format_orlinye_29 = new ol.format.GeoJSON();
var features_orlinye_29 = format_orlinye_29.readFeatures(json_orlinye_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_orlinye_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_orlinye_29.addFeatures(features_orlinye_29);
var lyr_orlinye_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_orlinye_29, 
                style: style_orlinye_29,
                popuplayertitle: "orlinye",
                interactive: true,
                title: '<img src="styles/legend/orlinye_29.png" /> orlinye'
            });
var format_zmeykovskie_30 = new ol.format.GeoJSON();
var features_zmeykovskie_30 = format_zmeykovskie_30.readFeatures(json_zmeykovskie_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zmeykovskie_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zmeykovskie_30.addFeatures(features_zmeykovskie_30);
var lyr_zmeykovskie_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zmeykovskie_30, 
                style: style_zmeykovskie_30,
                popuplayertitle: "zmeykovskie",
                interactive: true,
                title: '<img src="styles/legend/zmeykovskie_30.png" /> zmeykovskie'
            });
var format_volkonskoe_31 = new ol.format.GeoJSON();
var features_volkonskoe_31 = format_volkonskoe_31.readFeatures(json_volkonskoe_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_volkonskoe_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_volkonskoe_31.addFeatures(features_volkonskoe_31);
var lyr_volkonskoe_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_volkonskoe_31, 
                style: style_volkonskoe_31,
                popuplayertitle: "volkonskoe",
                interactive: true,
                title: '<img src="styles/legend/volkonskoe_31.png" /> volkonskoe'
            });
var format_chudokrasotka_32 = new ol.format.GeoJSON();
var features_chudokrasotka_32 = format_chudokrasotka_32.readFeatures(json_chudokrasotka_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chudokrasotka_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chudokrasotka_32.addFeatures(features_chudokrasotka_32);
var lyr_chudokrasotka_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chudokrasotka_32, 
                style: style_chudokrasotka_32,
                popuplayertitle: "chudo-krasotka",
                interactive: true,
                title: '<img src="styles/legend/chudokrasotka_32.png" /> chudo-krasotka'
            });
var format_berendeevo_33 = new ol.format.GeoJSON();
var features_berendeevo_33 = format_berendeevo_33.readFeatures(json_berendeevo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_berendeevo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_berendeevo_33.addFeatures(features_berendeevo_33);
var lyr_berendeevo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_berendeevo_33, 
                style: style_berendeevo_33,
                popuplayertitle: "berendeevo",
                interactive: true,
                title: '<img src="styles/legend/berendeevo_33.png" /> berendeevo'
            });
var format_psydah_34 = new ol.format.GeoJSON();
var features_psydah_34 = format_psydah_34.readFeatures(json_psydah_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_psydah_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_psydah_34.addFeatures(features_psydah_34);
var lyr_psydah_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_psydah_34, 
                style: style_psydah_34,
                popuplayertitle: "psydah",
                interactive: true,
                title: '<img src="styles/legend/psydah_34.png" /> psydah'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_psenodah_1.setVisible(true);lyr_achips_2.setVisible(true);lyr_medv_vor_3.setVisible(true);lyr_uzurub_4.setVisible(true);lyr_k_moryu_5.setVisible(true);lyr_cherez_gory_6.setVisible(true);lyr_engelman_7.setVisible(true);lyr_cherez_pereval_8.setVisible(true);lyr_krasn_pol_9.setVisible(true);lyr_po_doline_10.setVisible(true);lyr_sarykum_11.setVisible(true);lyr_markova_12.setVisible(true);lyr_yuzhny_13.setVisible(true);lyr_severny_14.setVisible(true);lyr_leymi_15.setVisible(true);lyr_egikal_16.setVisible(true);lyr_hamhi_17.setVisible(true);lyr_targim_18.setVisible(true);lyr_sosnovaya_19.setVisible(true);lyr_oblepihovaya_20.setVisible(true);lyr_thaba_21.setVisible(true);lyr_mizhirgi_22.setVisible(true);lyr_boran_23.setVisible(true);lyr_k_narz_24.setVisible(true);lyr_k_ledniku_25.setVisible(true);lyr_33_26.setVisible(true);lyr_azhek_27.setVisible(true);lyr_agurskie_28.setVisible(true);lyr_orlinye_29.setVisible(true);lyr_zmeykovskie_30.setVisible(true);lyr_volkonskoe_31.setVisible(true);lyr_chudokrasotka_32.setVisible(true);lyr_berendeevo_33.setVisible(true);lyr_psydah_34.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_psenodah_1,lyr_achips_2,lyr_medv_vor_3,lyr_uzurub_4,lyr_k_moryu_5,lyr_cherez_gory_6,lyr_engelman_7,lyr_cherez_pereval_8,lyr_krasn_pol_9,lyr_po_doline_10,lyr_sarykum_11,lyr_markova_12,lyr_yuzhny_13,lyr_severny_14,lyr_leymi_15,lyr_egikal_16,lyr_hamhi_17,lyr_targim_18,lyr_sosnovaya_19,lyr_oblepihovaya_20,lyr_thaba_21,lyr_mizhirgi_22,lyr_boran_23,lyr_k_narz_24,lyr_k_ledniku_25,lyr_33_26,lyr_azhek_27,lyr_agurskie_28,lyr_orlinye_29,lyr_zmeykovskie_30,lyr_volkonskoe_31,lyr_chudokrasotka_32,lyr_berendeevo_33,lyr_psydah_34];
lyr_psenodah_1.set('fieldAliases', {'name': 'name', });
lyr_achips_2.set('fieldAliases', {'id': 'id', });
lyr_medv_vor_3.set('fieldAliases', {'id': 'id', });
lyr_uzurub_4.set('fieldAliases', {'name': 'name', });
lyr_k_moryu_5.set('fieldAliases', {'id': 'id', });
lyr_cherez_gory_6.set('fieldAliases', {'id': 'id', });
lyr_engelman_7.set('fieldAliases', {'id': 'id', });
lyr_cherez_pereval_8.set('fieldAliases', {'id': 'id', });
lyr_krasn_pol_9.set('fieldAliases', {'id': 'id', });
lyr_po_doline_10.set('fieldAliases', {'id': 'id', });
lyr_sarykum_11.set('fieldAliases', {'id': 'id', });
lyr_markova_12.set('fieldAliases', {'id': 'id', });
lyr_yuzhny_13.set('fieldAliases', {'id': 'id', });
lyr_severny_14.set('fieldAliases', {'id': 'id', });
lyr_leymi_15.set('fieldAliases', {'id': 'id', });
lyr_egikal_16.set('fieldAliases', {'id': 'id', });
lyr_hamhi_17.set('fieldAliases', {'id': 'id', });
lyr_targim_18.set('fieldAliases', {'id': 'id', });
lyr_sosnovaya_19.set('fieldAliases', {'id': 'id', });
lyr_oblepihovaya_20.set('fieldAliases', {'id': 'id', });
lyr_thaba_21.set('fieldAliases', {'id': 'id', });
lyr_mizhirgi_22.set('fieldAliases', {'id': 'id', });
lyr_boran_23.set('fieldAliases', {'id': 'id', });
lyr_k_narz_24.set('fieldAliases', {'id': 'id', });
lyr_k_ledniku_25.set('fieldAliases', {'id': 'id', });
lyr_33_26.set('fieldAliases', {'id': 'id', });
lyr_azhek_27.set('fieldAliases', {'id': 'id', });
lyr_agurskie_28.set('fieldAliases', {'id': 'id', });
lyr_orlinye_29.set('fieldAliases', {'id': 'id', });
lyr_zmeykovskie_30.set('fieldAliases', {'id': 'id', });
lyr_volkonskoe_31.set('fieldAliases', {'id': 'id', });
lyr_chudokrasotka_32.set('fieldAliases', {'id': 'id', });
lyr_berendeevo_33.set('fieldAliases', {'id': 'id', });
lyr_psydah_34.set('fieldAliases', {'id': 'id', });
lyr_psenodah_1.set('fieldImages', {'name': 'TextEdit', });
lyr_achips_2.set('fieldImages', {'id': 'TextEdit', });
lyr_medv_vor_3.set('fieldImages', {'id': 'TextEdit', });
lyr_uzurub_4.set('fieldImages', {'name': 'TextEdit', });
lyr_k_moryu_5.set('fieldImages', {'id': 'TextEdit', });
lyr_cherez_gory_6.set('fieldImages', {'id': 'TextEdit', });
lyr_engelman_7.set('fieldImages', {'id': 'TextEdit', });
lyr_cherez_pereval_8.set('fieldImages', {'id': 'TextEdit', });
lyr_krasn_pol_9.set('fieldImages', {'id': 'TextEdit', });
lyr_po_doline_10.set('fieldImages', {'id': 'TextEdit', });
lyr_sarykum_11.set('fieldImages', {'id': 'TextEdit', });
lyr_markova_12.set('fieldImages', {'id': 'TextEdit', });
lyr_yuzhny_13.set('fieldImages', {'id': 'TextEdit', });
lyr_severny_14.set('fieldImages', {'id': 'TextEdit', });
lyr_leymi_15.set('fieldImages', {'id': 'TextEdit', });
lyr_egikal_16.set('fieldImages', {'id': 'TextEdit', });
lyr_hamhi_17.set('fieldImages', {'id': 'TextEdit', });
lyr_targim_18.set('fieldImages', {'id': 'TextEdit', });
lyr_sosnovaya_19.set('fieldImages', {'id': 'TextEdit', });
lyr_oblepihovaya_20.set('fieldImages', {'id': 'TextEdit', });
lyr_thaba_21.set('fieldImages', {'id': 'TextEdit', });
lyr_mizhirgi_22.set('fieldImages', {'id': 'TextEdit', });
lyr_boran_23.set('fieldImages', {'id': 'TextEdit', });
lyr_k_narz_24.set('fieldImages', {'id': 'TextEdit', });
lyr_k_ledniku_25.set('fieldImages', {'id': 'TextEdit', });
lyr_33_26.set('fieldImages', {'id': 'TextEdit', });
lyr_azhek_27.set('fieldImages', {'id': 'TextEdit', });
lyr_agurskie_28.set('fieldImages', {'id': 'TextEdit', });
lyr_orlinye_29.set('fieldImages', {'id': 'TextEdit', });
lyr_zmeykovskie_30.set('fieldImages', {'id': 'TextEdit', });
lyr_volkonskoe_31.set('fieldImages', {'id': 'TextEdit', });
lyr_chudokrasotka_32.set('fieldImages', {'id': 'TextEdit', });
lyr_berendeevo_33.set('fieldImages', {'id': 'TextEdit', });
lyr_psydah_34.set('fieldImages', {'id': 'TextEdit', });
lyr_psenodah_1.set('fieldLabels', {'name': 'no label', });
lyr_achips_2.set('fieldLabels', {'id': 'no label', });
lyr_medv_vor_3.set('fieldLabels', {'id': 'no label', });
lyr_uzurub_4.set('fieldLabels', {'name': 'no label', });
lyr_k_moryu_5.set('fieldLabels', {'id': 'no label', });
lyr_cherez_gory_6.set('fieldLabels', {'id': 'no label', });
lyr_engelman_7.set('fieldLabels', {'id': 'no label', });
lyr_cherez_pereval_8.set('fieldLabels', {'id': 'no label', });
lyr_krasn_pol_9.set('fieldLabels', {'id': 'no label', });
lyr_po_doline_10.set('fieldLabels', {'id': 'no label', });
lyr_sarykum_11.set('fieldLabels', {'id': 'no label', });
lyr_markova_12.set('fieldLabels', {'id': 'no label', });
lyr_yuzhny_13.set('fieldLabels', {'id': 'no label', });
lyr_severny_14.set('fieldLabels', {'id': 'no label', });
lyr_leymi_15.set('fieldLabels', {'id': 'no label', });
lyr_egikal_16.set('fieldLabels', {'id': 'no label', });
lyr_hamhi_17.set('fieldLabels', {'id': 'no label', });
lyr_targim_18.set('fieldLabels', {'id': 'no label', });
lyr_sosnovaya_19.set('fieldLabels', {'id': 'no label', });
lyr_oblepihovaya_20.set('fieldLabels', {'id': 'no label', });
lyr_thaba_21.set('fieldLabels', {'id': 'no label', });
lyr_mizhirgi_22.set('fieldLabels', {'id': 'no label', });
lyr_boran_23.set('fieldLabels', {'id': 'no label', });
lyr_k_narz_24.set('fieldLabels', {'id': 'no label', });
lyr_k_ledniku_25.set('fieldLabels', {'id': 'no label', });
lyr_33_26.set('fieldLabels', {'id': 'no label', });
lyr_azhek_27.set('fieldLabels', {'id': 'no label', });
lyr_agurskie_28.set('fieldLabels', {'id': 'no label', });
lyr_orlinye_29.set('fieldLabels', {'id': 'no label', });
lyr_zmeykovskie_30.set('fieldLabels', {'id': 'no label', });
lyr_volkonskoe_31.set('fieldLabels', {'id': 'no label', });
lyr_chudokrasotka_32.set('fieldLabels', {'id': 'no label', });
lyr_berendeevo_33.set('fieldLabels', {'id': 'no label', });
lyr_psydah_34.set('fieldLabels', {'id': 'no label', });
lyr_psydah_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});