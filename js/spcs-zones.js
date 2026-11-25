/**
 * Every NAD83 State Plane zone, as published by EPSG.
 *
 * These parameters were previously six zones hardcoded twice over in
 * math.js -- once in the forward direction and once in the inverse -- so
 * adding a state meant editing two if/else chains correctly, and working
 * outside the Mid-Atlantic was not possible at all.
 *
 * GENERATED, DO NOT EDIT BY HAND. Extracted from the EPSG database shipped
 * with PROJ (via pyproj) by tools/gen_spcs_zones.py, from the projected CRS
 * codes EPSG:26929-26998 and EPSG:32100-32161, which are the NAD83 State
 * Plane zones defined in metres. Keys are the EPSG code of the metric
 * definition; the foot variants are the same projection read in different
 * units, which is the job's choice rather than the zone's.
 *
 * Angles are degrees, false easting and northing are METRES, and every zone
 * is on the GRS80 ellipsoid, as NAD83 is.
 *
 * Alaska zone 1 is an Oblique Mercator and is marked unsupported: it is
 * listed so the zone can be named and rejected, rather than silently
 * projected with the wrong method.
 */
const SPCS_ELLIPSOID = { a: 6378137.0, invF: 298.257222101 };

const SPCS_ZONES = {
  26929: { code: 26929, zone: 'Alabama East', state: 'Alabama', method: 'tm', lat0: 30.5, lon0: -85.83333333333333, k0: 0.99996, fe: 200000, fn: 0 },
  26930: { code: 26930, zone: 'Alabama West', state: 'Alabama', method: 'tm', lat0: 30, lon0: -87.5, k0: 0.999933333, fe: 600000, fn: 0 },
  26931: { code: 26931, zone: 'Alaska zone 1', state: 'Alaska', method: 'omerc', unsupported: true, latc: 57, lonc: -133.66666666666666, azimuth: 323.13010236111114, gridAngle: 323.13010236111114, k0: 0.9999, fe: 5000000, fn: -5000000 },
  26932: { code: 26932, zone: 'Alaska zone 2', state: 'Alaska', method: 'tm', lat0: 54, lon0: -142, k0: 0.9999, fe: 500000, fn: 0 },
  26933: { code: 26933, zone: 'Alaska zone 3', state: 'Alaska', method: 'tm', lat0: 54, lon0: -146, k0: 0.9999, fe: 500000, fn: 0 },
  26934: { code: 26934, zone: 'Alaska zone 4', state: 'Alaska', method: 'tm', lat0: 54, lon0: -150, k0: 0.9999, fe: 500000, fn: 0 },
  26935: { code: 26935, zone: 'Alaska zone 5', state: 'Alaska', method: 'tm', lat0: 54, lon0: -154, k0: 0.9999, fe: 500000, fn: 0 },
  26936: { code: 26936, zone: 'Alaska zone 6', state: 'Alaska', method: 'tm', lat0: 54, lon0: -158, k0: 0.9999, fe: 500000, fn: 0 },
  26937: { code: 26937, zone: 'Alaska zone 7', state: 'Alaska', method: 'tm', lat0: 54, lon0: -162, k0: 0.9999, fe: 500000, fn: 0 },
  26938: { code: 26938, zone: 'Alaska zone 8', state: 'Alaska', method: 'tm', lat0: 54, lon0: -166, k0: 0.9999, fe: 500000, fn: 0 },
  26939: { code: 26939, zone: 'Alaska zone 9', state: 'Alaska', method: 'tm', lat0: 54, lon0: -170, k0: 0.9999, fe: 500000, fn: 0 },
  26940: { code: 26940, zone: 'Alaska zone 10', state: 'Alaska', method: 'lcc', lat0: 51, lon0: -176, sp1: 53.833333333333336, sp2: 51.833333333333336, fe: 1000000, fn: 0 },
  26941: { code: 26941, zone: 'California zone 1', state: 'California', method: 'lcc', lat0: 39.333333333333336, lon0: -122, sp1: 41.666666666666664, sp2: 40, fe: 2000000, fn: 500000 },
  26942: { code: 26942, zone: 'California zone 2', state: 'California', method: 'lcc', lat0: 37.666666666666664, lon0: -122, sp1: 39.833333333333336, sp2: 38.333333333333336, fe: 2000000, fn: 500000 },
  26943: { code: 26943, zone: 'California zone 3', state: 'California', method: 'lcc', lat0: 36.5, lon0: -120.5, sp1: 38.43333333333333, sp2: 37.06666666666667, fe: 2000000, fn: 500000 },
  26944: { code: 26944, zone: 'California zone 4', state: 'California', method: 'lcc', lat0: 35.333333333333336, lon0: -119, sp1: 37.25, sp2: 36, fe: 2000000, fn: 500000 },
  26945: { code: 26945, zone: 'California zone 5', state: 'California', method: 'lcc', lat0: 33.5, lon0: -118, sp1: 35.46666666666667, sp2: 34.03333333333333, fe: 2000000, fn: 500000 },
  26946: { code: 26946, zone: 'California zone 6', state: 'California', method: 'lcc', lat0: 32.166666666666664, lon0: -116.25, sp1: 33.88333333333333, sp2: 32.78333333333333, fe: 2000000, fn: 500000 },
  26948: { code: 26948, zone: 'Arizona East', state: 'Arizona', method: 'tm', lat0: 31, lon0: -110.16666666666667, k0: 0.9999, fe: 213360, fn: 0 },
  26949: { code: 26949, zone: 'Arizona Central', state: 'Arizona', method: 'tm', lat0: 31, lon0: -111.91666666666667, k0: 0.9999, fe: 213360, fn: 0 },
  26950: { code: 26950, zone: 'Arizona West', state: 'Arizona', method: 'tm', lat0: 31, lon0: -113.75, k0: 0.999933333, fe: 213360, fn: 0 },
  26951: { code: 26951, zone: 'Arkansas North', state: 'Arkansas', method: 'lcc', lat0: 34.333333333333336, lon0: -92, sp1: 36.233333333333334, sp2: 34.93333333333333, fe: 400000, fn: 0 },
  26952: { code: 26952, zone: 'Arkansas South', state: 'Arkansas', method: 'lcc', lat0: 32.666666666666664, lon0: -92, sp1: 34.766666666666666, sp2: 33.3, fe: 400000, fn: 400000 },
  26953: { code: 26953, zone: 'Colorado North', state: 'Colorado', method: 'lcc', lat0: 39.333333333333336, lon0: -105.5, sp1: 40.78333333333333, sp2: 39.71666666666667, fe: 914401.8289, fn: 304800.6096 },
  26954: { code: 26954, zone: 'Colorado Central', state: 'Colorado', method: 'lcc', lat0: 37.833333333333336, lon0: -105.5, sp1: 39.75, sp2: 38.45, fe: 914401.8289, fn: 304800.6096 },
  26955: { code: 26955, zone: 'Colorado South', state: 'Colorado', method: 'lcc', lat0: 36.666666666666664, lon0: -105.5, sp1: 38.43333333333333, sp2: 37.233333333333334, fe: 914401.8289, fn: 304800.6096 },
  26956: { code: 26956, zone: 'Connecticut', state: 'Connecticut', method: 'lcc', lat0: 40.833333333333336, lon0: -72.75, sp1: 41.86666666666667, sp2: 41.2, fe: 304800.6096, fn: 152400.3048 },
  26957: { code: 26957, zone: 'Delaware', state: 'Delaware', method: 'tm', lat0: 38, lon0: -75.41666666666667, k0: 0.999995, fe: 200000, fn: 0 },
  26958: { code: 26958, zone: 'Florida East', state: 'Florida', method: 'tm', lat0: 24.333333333333332, lon0: -81, k0: 0.999941177, fe: 200000, fn: 0 },
  26959: { code: 26959, zone: 'Florida West', state: 'Florida', method: 'tm', lat0: 24.333333333333332, lon0: -82, k0: 0.999941177, fe: 200000, fn: 0 },
  26960: { code: 26960, zone: 'Florida North', state: 'Florida', method: 'lcc', lat0: 29, lon0: -84.5, sp1: 30.75, sp2: 29.583333333333332, fe: 600000, fn: 0 },
  26961: { code: 26961, zone: 'Hawaii zone 1', state: 'Hawaii', method: 'tm', lat0: 18.833333333333332, lon0: -155.5, k0: 0.999966667, fe: 500000, fn: 0 },
  26962: { code: 26962, zone: 'Hawaii zone 2', state: 'Hawaii', method: 'tm', lat0: 20.333333333333332, lon0: -156.66666666666666, k0: 0.999966667, fe: 500000, fn: 0 },
  26963: { code: 26963, zone: 'Hawaii zone 3', state: 'Hawaii', method: 'tm', lat0: 21.166666666666668, lon0: -158, k0: 0.99999, fe: 500000, fn: 0 },
  26964: { code: 26964, zone: 'Hawaii zone 4', state: 'Hawaii', method: 'tm', lat0: 21.833333333333332, lon0: -159.5, k0: 0.99999, fe: 500000, fn: 0 },
  26965: { code: 26965, zone: 'Hawaii zone 5', state: 'Hawaii', method: 'tm', lat0: 21.666666666666668, lon0: -160.16666666666666, k0: 1, fe: 500000, fn: 0 },
  26966: { code: 26966, zone: 'Georgia East', state: 'Georgia', method: 'tm', lat0: 30, lon0: -82.16666666666667, k0: 0.9999, fe: 200000, fn: 0 },
  26967: { code: 26967, zone: 'Georgia West', state: 'Georgia', method: 'tm', lat0: 30, lon0: -84.16666666666667, k0: 0.9999, fe: 700000, fn: 0 },
  26968: { code: 26968, zone: 'Idaho East', state: 'Idaho', method: 'tm', lat0: 41.666666666666664, lon0: -112.16666666666667, k0: 0.999947368, fe: 200000, fn: 0 },
  26969: { code: 26969, zone: 'Idaho Central', state: 'Idaho', method: 'tm', lat0: 41.666666666666664, lon0: -114, k0: 0.999947368, fe: 500000, fn: 0 },
  26970: { code: 26970, zone: 'Idaho West', state: 'Idaho', method: 'tm', lat0: 41.666666666666664, lon0: -115.75, k0: 0.999933333, fe: 800000, fn: 0 },
  26971: { code: 26971, zone: 'Illinois East', state: 'Illinois', method: 'tm', lat0: 36.666666666666664, lon0: -88.33333333333333, k0: 0.999975, fe: 300000, fn: 0 },
  26972: { code: 26972, zone: 'Illinois West', state: 'Illinois', method: 'tm', lat0: 36.666666666666664, lon0: -90.16666666666667, k0: 0.999941177, fe: 700000, fn: 0 },
  26973: { code: 26973, zone: 'Indiana East', state: 'Indiana', method: 'tm', lat0: 37.5, lon0: -85.66666666666667, k0: 0.999966667, fe: 100000, fn: 250000 },
  26974: { code: 26974, zone: 'Indiana West', state: 'Indiana', method: 'tm', lat0: 37.5, lon0: -87.08333333333333, k0: 0.999966667, fe: 900000, fn: 250000 },
  26975: { code: 26975, zone: 'Iowa North', state: 'Iowa', method: 'lcc', lat0: 41.5, lon0: -93.5, sp1: 43.266666666666666, sp2: 42.06666666666667, fe: 1500000, fn: 1000000 },
  26976: { code: 26976, zone: 'Iowa South', state: 'Iowa', method: 'lcc', lat0: 40, lon0: -93.5, sp1: 41.78333333333333, sp2: 40.61666666666667, fe: 500000, fn: 0 },
  26977: { code: 26977, zone: 'Kansas North', state: 'Kansas', method: 'lcc', lat0: 38.333333333333336, lon0: -98, sp1: 39.78333333333333, sp2: 38.71666666666667, fe: 400000, fn: 0 },
  26978: { code: 26978, zone: 'Kansas South', state: 'Kansas', method: 'lcc', lat0: 36.666666666666664, lon0: -98.5, sp1: 38.56666666666667, sp2: 37.266666666666666, fe: 400000, fn: 400000 },
  26980: { code: 26980, zone: 'Kentucky South', state: 'Kentucky', method: 'lcc', lat0: 36.333333333333336, lon0: -85.75, sp1: 37.93333333333333, sp2: 36.733333333333334, fe: 500000, fn: 500000 },
  26981: { code: 26981, zone: 'Louisiana North', state: 'Louisiana', method: 'lcc', lat0: 30.5, lon0: -92.5, sp1: 32.666666666666664, sp2: 31.166666666666668, fe: 1000000, fn: 0 },
  26982: { code: 26982, zone: 'Louisiana South', state: 'Louisiana', method: 'lcc', lat0: 28.5, lon0: -91.33333333333333, sp1: 30.7, sp2: 29.3, fe: 1000000, fn: 0 },
  26983: { code: 26983, zone: 'Maine East', state: 'Maine', method: 'tm', lat0: 43.666666666666664, lon0: -68.5, k0: 0.9999, fe: 300000, fn: 0 },
  26984: { code: 26984, zone: 'Maine West', state: 'Maine', method: 'tm', lat0: 42.833333333333336, lon0: -70.16666666666667, k0: 0.999966667, fe: 900000, fn: 0 },
  26985: { code: 26985, zone: 'Maryland', state: 'Maryland', method: 'lcc', lat0: 37.666666666666664, lon0: -77, sp1: 39.45, sp2: 38.3, fe: 400000, fn: 0 },
  26986: { code: 26986, zone: 'Massachusetts Mainland', state: 'Massachusetts', method: 'lcc', lat0: 41, lon0: -71.5, sp1: 42.68333333333333, sp2: 41.71666666666667, fe: 200000, fn: 750000 },
  26987: { code: 26987, zone: 'Massachusetts Island', state: 'Massachusetts', method: 'lcc', lat0: 41, lon0: -70.5, sp1: 41.483333333333334, sp2: 41.28333333333333, fe: 500000, fn: 0 },
  26988: { code: 26988, zone: 'Michigan North', state: 'Michigan', method: 'lcc', lat0: 44.78333333333333, lon0: -87, sp1: 47.083333333333336, sp2: 45.483333333333334, fe: 8000000, fn: 0 },
  26989: { code: 26989, zone: 'Michigan Central', state: 'Michigan', method: 'lcc', lat0: 43.31666666666667, lon0: -84.36666666666666, sp1: 45.7, sp2: 44.18333333333333, fe: 6000000, fn: 0 },
  26990: { code: 26990, zone: 'Michigan South', state: 'Michigan', method: 'lcc', lat0: 41.5, lon0: -84.36666666666666, sp1: 43.666666666666664, sp2: 42.1, fe: 4000000, fn: 0 },
  26991: { code: 26991, zone: 'Minnesota North', state: 'Minnesota', method: 'lcc', lat0: 46.5, lon0: -93.1, sp1: 48.63333333333333, sp2: 47.03333333333333, fe: 800000, fn: 100000 },
  26992: { code: 26992, zone: 'Minnesota Central', state: 'Minnesota', method: 'lcc', lat0: 45, lon0: -94.25, sp1: 47.05, sp2: 45.61666666666667, fe: 800000, fn: 100000 },
  26993: { code: 26993, zone: 'Minnesota South', state: 'Minnesota', method: 'lcc', lat0: 43, lon0: -94, sp1: 45.21666666666667, sp2: 43.78333333333333, fe: 800000, fn: 100000 },
  26994: { code: 26994, zone: 'Mississippi East', state: 'Mississippi', method: 'tm', lat0: 29.5, lon0: -88.83333333333333, k0: 0.99995, fe: 300000, fn: 0 },
  26995: { code: 26995, zone: 'Mississippi West', state: 'Mississippi', method: 'tm', lat0: 29.5, lon0: -90.33333333333333, k0: 0.99995, fe: 700000, fn: 0 },
  26996: { code: 26996, zone: 'Missouri East', state: 'Missouri', method: 'tm', lat0: 35.833333333333336, lon0: -90.5, k0: 0.999933333, fe: 250000, fn: 0 },
  26997: { code: 26997, zone: 'Missouri Central', state: 'Missouri', method: 'tm', lat0: 35.833333333333336, lon0: -92.5, k0: 0.999933333, fe: 500000, fn: 0 },
  26998: { code: 26998, zone: 'Missouri West', state: 'Missouri', method: 'tm', lat0: 36.166666666666664, lon0: -94.5, k0: 0.999941177, fe: 850000, fn: 0 },
  32100: { code: 32100, zone: 'Montana', state: 'Montana', method: 'lcc', lat0: 44.25, lon0: -109.5, sp1: 49, sp2: 45, fe: 600000, fn: 0 },
  32104: { code: 32104, zone: 'Nebraska', state: 'Nebraska', method: 'lcc', lat0: 39.833333333333336, lon0: -100, sp1: 43, sp2: 40, fe: 500000, fn: 0 },
  32107: { code: 32107, zone: 'Nevada East', state: 'Nevada', method: 'tm', lat0: 34.75, lon0: -115.58333333333333, k0: 0.9999, fe: 200000, fn: 8000000 },
  32108: { code: 32108, zone: 'Nevada Central', state: 'Nevada', method: 'tm', lat0: 34.75, lon0: -116.66666666666667, k0: 0.9999, fe: 500000, fn: 6000000 },
  32109: { code: 32109, zone: 'Nevada West', state: 'Nevada', method: 'tm', lat0: 34.75, lon0: -118.58333333333333, k0: 0.9999, fe: 800000, fn: 4000000 },
  32110: { code: 32110, zone: 'New Hampshire', state: 'New Hampshire', method: 'tm', lat0: 42.5, lon0: -71.66666666666667, k0: 0.999966667, fe: 300000, fn: 0 },
  32111: { code: 32111, zone: 'New Jersey', state: 'New Jersey', method: 'tm', lat0: 38.833333333333336, lon0: -74.5, k0: 0.9999, fe: 150000, fn: 0 },
  32112: { code: 32112, zone: 'New Mexico East', state: 'New Mexico', method: 'tm', lat0: 31, lon0: -104.33333333333333, k0: 0.999909091, fe: 165000, fn: 0 },
  32113: { code: 32113, zone: 'New Mexico Central', state: 'New Mexico', method: 'tm', lat0: 31, lon0: -106.25, k0: 0.9999, fe: 500000, fn: 0 },
  32114: { code: 32114, zone: 'New Mexico West', state: 'New Mexico', method: 'tm', lat0: 31, lon0: -107.83333333333333, k0: 0.999916667, fe: 830000, fn: 0 },
  32115: { code: 32115, zone: 'New York East', state: 'New York', method: 'tm', lat0: 38.833333333333336, lon0: -74.5, k0: 0.9999, fe: 150000, fn: 0 },
  32116: { code: 32116, zone: 'New York Central', state: 'New York', method: 'tm', lat0: 40, lon0: -76.58333333333333, k0: 0.9999375, fe: 250000, fn: 0 },
  32117: { code: 32117, zone: 'New York West', state: 'New York', method: 'tm', lat0: 40, lon0: -78.58333333333333, k0: 0.9999375, fe: 350000, fn: 0 },
  32118: { code: 32118, zone: 'New York Long Island', state: 'New York', method: 'lcc', lat0: 40.166666666666664, lon0: -74, sp1: 41.03333333333333, sp2: 40.666666666666664, fe: 300000, fn: 0 },
  32119: { code: 32119, zone: 'North Carolina', state: 'North Carolina', method: 'lcc', lat0: 33.75, lon0: -79, sp1: 36.166666666666664, sp2: 34.333333333333336, fe: 609601.22, fn: 0 },
  32120: { code: 32120, zone: 'North Dakota North', state: 'North Dakota', method: 'lcc', lat0: 47, lon0: -100.5, sp1: 48.733333333333334, sp2: 47.43333333333333, fe: 600000, fn: 0 },
  32121: { code: 32121, zone: 'North Dakota South', state: 'North Dakota', method: 'lcc', lat0: 45.666666666666664, lon0: -100.5, sp1: 47.483333333333334, sp2: 46.18333333333333, fe: 600000, fn: 0 },
  32122: { code: 32122, zone: 'Ohio North', state: 'Ohio', method: 'lcc', lat0: 39.666666666666664, lon0: -82.5, sp1: 41.7, sp2: 40.43333333333333, fe: 600000, fn: 0 },
  32123: { code: 32123, zone: 'Ohio South', state: 'Ohio', method: 'lcc', lat0: 38, lon0: -82.5, sp1: 40.03333333333333, sp2: 38.733333333333334, fe: 600000, fn: 0 },
  32124: { code: 32124, zone: 'Oklahoma North', state: 'Oklahoma', method: 'lcc', lat0: 35, lon0: -98, sp1: 36.766666666666666, sp2: 35.56666666666667, fe: 600000, fn: 0 },
  32125: { code: 32125, zone: 'Oklahoma South', state: 'Oklahoma', method: 'lcc', lat0: 33.333333333333336, lon0: -98, sp1: 35.233333333333334, sp2: 33.93333333333333, fe: 600000, fn: 0 },
  32126: { code: 32126, zone: 'Oregon North', state: 'Oregon', method: 'lcc', lat0: 43.666666666666664, lon0: -120.5, sp1: 46, sp2: 44.333333333333336, fe: 2500000, fn: 0 },
  32127: { code: 32127, zone: 'Oregon South', state: 'Oregon', method: 'lcc', lat0: 41.666666666666664, lon0: -120.5, sp1: 44, sp2: 42.333333333333336, fe: 1500000, fn: 0 },
  32128: { code: 32128, zone: 'Pennsylvania North', state: 'Pennsylvania', method: 'lcc', lat0: 40.166666666666664, lon0: -77.75, sp1: 41.95, sp2: 40.88333333333333, fe: 600000, fn: 0 },
  32129: { code: 32129, zone: 'Pennsylvania South', state: 'Pennsylvania', method: 'lcc', lat0: 39.333333333333336, lon0: -77.75, sp1: 40.96666666666667, sp2: 39.93333333333333, fe: 600000, fn: 0 },
  32130: { code: 32130, zone: 'Rhode Island', state: 'Rhode Island', method: 'tm', lat0: 41.083333333333336, lon0: -71.5, k0: 0.99999375, fe: 100000, fn: 0 },
  32133: { code: 32133, zone: 'South Carolina', state: 'South Carolina', method: 'lcc', lat0: 31.833333333333332, lon0: -81, sp1: 34.833333333333336, sp2: 32.5, fe: 609600, fn: 0 },
  32134: { code: 32134, zone: 'South Dakota North', state: 'South Dakota', method: 'lcc', lat0: 43.833333333333336, lon0: -100, sp1: 45.68333333333333, sp2: 44.416666666666664, fe: 600000, fn: 0 },
  32135: { code: 32135, zone: 'South Dakota South', state: 'South Dakota', method: 'lcc', lat0: 42.333333333333336, lon0: -100.33333333333333, sp1: 44.4, sp2: 42.833333333333336, fe: 600000, fn: 0 },
  32136: { code: 32136, zone: 'Tennessee', state: 'Tennessee', method: 'lcc', lat0: 34.333333333333336, lon0: -86, sp1: 36.416666666666664, sp2: 35.25, fe: 600000, fn: 0 },
  32137: { code: 32137, zone: 'Texas North', state: 'Texas', method: 'lcc', lat0: 34, lon0: -101.5, sp1: 36.18333333333333, sp2: 34.65, fe: 200000, fn: 1000000 },
  32138: { code: 32138, zone: 'Texas North Central', state: 'Texas', method: 'lcc', lat0: 31.666666666666668, lon0: -98.5, sp1: 33.96666666666667, sp2: 32.13333333333333, fe: 600000, fn: 2000000 },
  32139: { code: 32139, zone: 'Texas Central', state: 'Texas', method: 'lcc', lat0: 29.666666666666668, lon0: -100.33333333333333, sp1: 31.883333333333333, sp2: 30.116666666666667, fe: 700000, fn: 3000000 },
  32140: { code: 32140, zone: 'Texas South Central', state: 'Texas', method: 'lcc', lat0: 27.833333333333332, lon0: -99, sp1: 30.283333333333335, sp2: 28.383333333333333, fe: 600000, fn: 4000000 },
  32141: { code: 32141, zone: 'Texas South', state: 'Texas', method: 'lcc', lat0: 25.666666666666668, lon0: -98.5, sp1: 27.833333333333332, sp2: 26.166666666666668, fe: 300000, fn: 5000000 },
  32142: { code: 32142, zone: 'Utah North', state: 'Utah', method: 'lcc', lat0: 40.333333333333336, lon0: -111.5, sp1: 41.78333333333333, sp2: 40.71666666666667, fe: 500000, fn: 1000000 },
  32143: { code: 32143, zone: 'Utah Central', state: 'Utah', method: 'lcc', lat0: 38.333333333333336, lon0: -111.5, sp1: 40.65, sp2: 39.016666666666666, fe: 500000, fn: 2000000 },
  32144: { code: 32144, zone: 'Utah South', state: 'Utah', method: 'lcc', lat0: 36.666666666666664, lon0: -111.5, sp1: 38.35, sp2: 37.21666666666667, fe: 500000, fn: 3000000 },
  32145: { code: 32145, zone: 'Vermont', state: 'Vermont', method: 'tm', lat0: 42.5, lon0: -72.5, k0: 0.999964286, fe: 500000, fn: 0 },
  32146: { code: 32146, zone: 'Virginia North', state: 'Virginia', method: 'lcc', lat0: 37.666666666666664, lon0: -78.5, sp1: 39.2, sp2: 38.03333333333333, fe: 3500000, fn: 2000000 },
  32147: { code: 32147, zone: 'Virginia South', state: 'Virginia', method: 'lcc', lat0: 36.333333333333336, lon0: -78.5, sp1: 37.96666666666667, sp2: 36.766666666666666, fe: 3500000, fn: 1000000 },
  32148: { code: 32148, zone: 'Washington North', state: 'Washington', method: 'lcc', lat0: 47, lon0: -120.83333333333333, sp1: 48.733333333333334, sp2: 47.5, fe: 500000, fn: 0 },
  32149: { code: 32149, zone: 'Washington South', state: 'Washington', method: 'lcc', lat0: 45.333333333333336, lon0: -120.5, sp1: 47.333333333333336, sp2: 45.833333333333336, fe: 500000, fn: 0 },
  32150: { code: 32150, zone: 'West Virginia North', state: 'West Virginia', method: 'lcc', lat0: 38.5, lon0: -79.5, sp1: 40.25, sp2: 39, fe: 600000, fn: 0 },
  32151: { code: 32151, zone: 'West Virginia South', state: 'West Virginia', method: 'lcc', lat0: 37, lon0: -81, sp1: 38.88333333333333, sp2: 37.483333333333334, fe: 600000, fn: 0 },
  32152: { code: 32152, zone: 'Wisconsin North', state: 'Wisconsin', method: 'lcc', lat0: 45.166666666666664, lon0: -90, sp1: 46.766666666666666, sp2: 45.56666666666667, fe: 600000, fn: 0 },
  32153: { code: 32153, zone: 'Wisconsin Central', state: 'Wisconsin', method: 'lcc', lat0: 43.833333333333336, lon0: -90, sp1: 45.5, sp2: 44.25, fe: 600000, fn: 0 },
  32154: { code: 32154, zone: 'Wisconsin South', state: 'Wisconsin', method: 'lcc', lat0: 42, lon0: -90, sp1: 44.06666666666667, sp2: 42.733333333333334, fe: 600000, fn: 0 },
  32155: { code: 32155, zone: 'Wyoming East', state: 'Wyoming', method: 'tm', lat0: 40.5, lon0: -105.16666666666667, k0: 0.9999375, fe: 200000, fn: 0 },
  32156: { code: 32156, zone: 'Wyoming East Central', state: 'Wyoming', method: 'tm', lat0: 40.5, lon0: -107.33333333333333, k0: 0.9999375, fe: 400000, fn: 100000 },
  32157: { code: 32157, zone: 'Wyoming West Central', state: 'Wyoming', method: 'tm', lat0: 40.5, lon0: -108.75, k0: 0.9999375, fe: 600000, fn: 0 },
  32158: { code: 32158, zone: 'Wyoming West', state: 'Wyoming', method: 'tm', lat0: 40.5, lon0: -110.08333333333333, k0: 0.9999375, fe: 800000, fn: 100000 },
  32159: { code: 32159, zone: 'Wyoming Lambert', state: 'Wyoming', method: 'lcc', lat0: 41, lon0: -107.5, sp1: 41, sp2: 45, fe: 500000, fn: 200000 },
  32161: { code: 32161, zone: 'Puerto Rico & Virgin Is.', state: 'Puerto Rico & Virgin Is.', method: 'lcc', lat0: 17.833333333333332, lon0: -66.43333333333334, sp1: 18.433333333333334, sp2: 18.033333333333335, fe: 200000, fn: 200000 },
};

/** The zone keys this app used before the table existed. */
const SPCS_LEGACY_ZONE_KEYS = {
  md: 26985,      // Maryland
  de: 26957,      // Delaware
  va_n: 32146,    // Virginia North
  va_s: 32147,    // Virginia South
  pa_n: 32128,    // Pennsylvania North
  pa_s: 32129     // Pennsylvania South
};
