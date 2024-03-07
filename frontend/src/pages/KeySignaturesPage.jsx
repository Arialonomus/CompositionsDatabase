import React, { useState } from 'react';

function KeySignatures() {
  const initialKeySignatures = [
    'A major', 'A minor', 'A-flat major', 'A-flat minor', 'A-sharp minor',
    'B major', 'B minor', 'B-flat major', 'B-flat minor', 'C major',
    'C minor', 'C-flat major', 'C-sharp major', 'C-sharp minor', 'D major',
    'D minor', 'D-flat major', 'D-sharp minor', 'E major', 'E minor',
    'E-flat major', 'E-flat minor', 'F major', 'F minor', 'F-sharp major',
    'F-sharp minor', 'G major', 'G minor', 'G-flat major', 'G-sharp minor'
  ];

  const [keySignatures, setKeySignatures] = useState(initialKeySignatures);

  const handleEdit = (keySignature) => {
    // Implement edit functionality
  };

  const handleDelete = (keySignature) => {
    setKeySignatures(keySignatures.filter(key => key !== keySignature));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Key Signature</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {keySignatures.map((key, index) => (
            <tr key={index}>
              <td>{key}</td>
              <td><button onClick={() => handleEdit(key)}>Edit</button></td>
              <td><button onClick={() => handleDelete(key)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KeySignatures;
