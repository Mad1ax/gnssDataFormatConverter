function kmlTrackEntry(data, name = 'kmlTrack') {
  let kmlTrackData = '';
  data.forEach((elem) => {
    kmlTrackData += `${elem.long},${elem.lat},0 `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"> 
<Document>
      <LineStyle>
        <color>7fff00ff</color>
        <width>3</width>
      </LineStyle>
       <Placemark>
        <name>${name}</name>
        <visibility>1</visibility>
        <description>track .kml from gnss data editor</description>
        <Style>
		  <LineStyle>
			<color>640000ff</color>
			<width>3</width>
		  </LineStyle>
	</Style>
	<MultiGeometry>
        <LineString>
          <tessellate>1</tessellate>
          <coordinates>${kmlTrackData}</coordinates>
        </LineString>
      </MultiGeometry>
      </Placemark>
</Document>
</kml>
    `;
}

function kmlPointsEntry(data) {
  let kmlPoints = '';
  data.forEach((elem) => {
    kmlPoints += `<Placemark>
			<name>.</name>
            <description>
                    latitude ${elem.lat},
                    longtitude ${elem.long}
            </description>
            <Point>
			    <coordinates>${elem.long},${elem.lat},0</coordinates>
		    </Point>
		</Placemark>
        `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"> 
<Document>
		${kmlPoints}
</Document>
</kml>`;
}

export { kmlTrackEntry, kmlPointsEntry };
