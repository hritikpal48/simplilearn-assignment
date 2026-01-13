// FILE: app/actions/submitRSVP.js
'use server'

import Airtable from 'airtable';

// Configure Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_ACCESS_TOKEN
}).base(process.env.AIRTABLE_BASE_ID);

export async function submitRSVP(formData) {
  try {
    // Validate the data
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const designation = formData.get('designation');

    // Basic validation
    if (!name || !email || !company || !designation) {
      return {
        success: false,
        error: 'All fields are required'
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: 'Please enter a valid email address'
      };
    }

    // Create record in Airtable
    const record = await base(process.env.AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          Name: name,
          Email: email,
          Company: company,
          Designation: designation,
          'Submitted At': new Date().toISOString()
        }
      }
    ]);

    console.log('Record created successfully:', record[0].id);

    return {
      success: true,
      message: 'RSVP submitted successfully!',
      recordId: record[0].id
    };

  } catch (error) {
    console.error('Airtable submission error:', error);
    
    return {
      success: false,
      error: 'Failed to submit RSVP. Please try again.'
    };
  }
}

console.log("API KEY:", process.env.AIRTABLE_ACCESS_TOKEN);
console.log("BASE ID:", process.env.AIRTABLE_BASE_ID);
console.log("TABLE:", process.env.AIRTABLE_TABLE_NAME);