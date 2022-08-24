(function(speak) {
    var parentApp = window.parent.Sitecore.Speak.app.findApplication('EditActionSubAppRenderer');
    var pipelineTenantServiceTemplateId = "{75AC60B4-2E0D-4A16-AC6B-35B8C0311032}";

    speak.pageCode([],
        function() {
            return {
                initialized: function() {
                    this.on({
                            "loaded": this.loadDone
                        },
                        this);

                    this.ItemTreeView.on("change:SelectedItem", this.changedSelectedItemId, this);

                    if (parentApp) {
                        parentApp.loadDone(this, this.HeaderTitle.Text, this.HeaderSubtitle.Text);
                    }
                },

                changedSelectedItemId: function() {
                    var isSelectable = this.ItemTreeView.SelectedItem.$templateId === pipelineTenantServiceTemplateId;
                    parentApp.setSelectability(this, isSelectable, this.ItemTreeView.SelectedItemId);
                },

                loadDone: function(parameters) {
                    this.Parameters = parameters || {};
                    this.ConnectionStringName.Value = this.Parameters.connectionStringName || "";
                    this.ItemTreeView.SelectedItemId = this.Parameters.tenantServiceEndpointId;
                    this.CreateGoalButton.IsEnabled = true;
                },

                getData: function() {
                    this.Parameters.tenantServiceEndpointId = this.ItemTreeView.SelectedItemId;
                    this.Parameters.connectionStringName = this.ConnectionStringName.Value;
                    return this.Parameters;
                }
            };
        });
})(Sitecore.Speak);
