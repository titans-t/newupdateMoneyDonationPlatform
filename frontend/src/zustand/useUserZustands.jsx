import { create } from 'zustand';
 
export const useUserZustands = create((set) => ({
    selectedCampaign: "", // Initial state
    setSelectedCampaign: (campaign) => set({ selectedCampaign: campaign }), // Correctly updating `selectedCampaign`
    tab: "dashboard",
    setSelectedTab: (tab) => set({ tab: tab }),
    createdCampaign: [],
    setCreatedCampaign: (createdCampaign) => set({ createdCampaign: createdCampaign }),
    deletedCampaign: [],
    setDeletedCampaign: (deletedCampaignItem) =>
        set((state) => ({
            deletedCampaign: [...state.deletedCampaign, deletedCampaignItem],
        })),
    userDonations: "",
    setUserDonations: (donation)=> set({userDonations: donation._id}),
    
    approvedCampaigns: "",
    setApprovedCampaigns: (campaign)=> set({approvedCampaigns: campaign._id})
}));
