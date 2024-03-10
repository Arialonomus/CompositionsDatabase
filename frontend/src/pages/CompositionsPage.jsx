import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CompositionList from '../components/CompositionList.mjs';
import { server_url } from '../config';

function CompositionsPage({ setCompositionToEdit }) {
  
  // Use the useNavigate module for redirection
  const redirect = useNavigate();

  // Define state variable for displaying compositions
  const [compositions, setCompositions] = useState([]);

  // RETRIEVE the entire list of compositions
  const loadCompositions = useCallback(() => {
    fetch(`${server_url}/api/compositions`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(compositions => {
        setCompositions(compositions);
      })
      .catch(error => {
        console.error('Error fetching compositions:', error);
      });
  }, []);

  // UPDATE a single composition
  const onEditComposition = async composition => {
    setCompositionToEdit(composition);
    redirect('/edit-composition');
  }

  // DELETE a single composition
  const onDeleteComposition = async id => {
    const response = await fetch(`${server_url}/api/compositions/${id}`, { method: 'DELETE'});
    if (response.ok) {
      loadCompositions();
    } else {
        console.error(`Unable to delete Composition with ID ${id}, status code = ${response.status}`)
    }
  }

  // LOAD all the compositions
  useEffect(() => {
    loadCompositions();
  }, [loadCompositions]);

  return (
    <>
      <h2>Compositions</h2>
      <p>See a live list of the compositions in our database. Click the add button below to add a new composition to the collection. Click the edit button to the right of a single composition to modify that entry. Click the delete button to remove that entry.</p>
      <CompositionList 
          compositions={compositions} 
          onEdit={onEditComposition} 
          onDelete={onDeleteComposition} 
      />
    </>
  );
}

export default CompositionsPage;