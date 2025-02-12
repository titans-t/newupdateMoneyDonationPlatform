import { create } from 'zustand';

export const useAdminZustand = create((set) => ({
  selectedTab: "dashboard",
  setSelectedTab: (selectedTab) => set({ selectedTab }),
  allCampaigns: [],
  setAllCampaigns: (campaign) =>
    set((state) => ({ ...state, allCampaigns: [...state.allCampaigns, campaign] })),
  approvedCampaigns: "",
  setApprovedCampaigns: (approvedCampaign)=> set({approvedCampaigns: approvedCampaign?._id}),
  
  rejectedCampaigns: "",
  setRejectedCampaigns: (rejectedCampaign)=> set({rejectedCampaigns: rejectedCampaign?._id}),
  closedCampaigns: "",
  setClosedCampaigns: (closedCampaign)=> set({closedCampaigns: closedCampaign?._id}),
  deleteCampaigns: "",
  setDeletedCampaigns: (deletedCampaign)=> set({deleteCampaigns: deletedCampaign?._id}),
  
  deleteUsers: "",
  setDeletedUsers: (deleteduser)=> set({deleteUsers: deleteduser?._id})

}));

