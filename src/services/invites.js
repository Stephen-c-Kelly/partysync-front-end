import api from './apiConfig.js';

export const getInvites = async () => {
    try {
      const response = await api.get("/profile/invites/");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getInvite = async (id) => {
    try {
      const response = await api.get(`/profile/invite/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const inviteStatus = async (id,inviteData) => {
    try {
      const response = await api.patch(`/profile/invite/${id}/response/`, {"status": inviteData});
      console.log(`user responded to invite`, inviteData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
//   export const updateParty = async (id, partyData) => {
//     try {
//       const response = await api.put(`/party/${id}/`, partyData);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   export const deleteParty = async (id) => {
//     try {
//       const response = await api.delete(`/party/${id}/`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };
