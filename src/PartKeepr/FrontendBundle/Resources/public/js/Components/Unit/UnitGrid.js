Ext.define('PartKeepr.UnitGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.UnitGrid',
	columns: [
	          {header: i18n("Unit"),  dataIndex: 'name', flex: 1},
	          {header: i18n("Symbol"),  dataIndex: 'symbol', width: 60}
	          ],
	addButtonText: i18n("Add Unit"),
	addButtonIcon: 'bundles/partkeeprfrontend/images/icons/unit_add.png',
    deleteButtonText: i18n("Delete Unit"),
    deleteButtonIcon: 'bundles/partkeeprfrontend/images/icons/unit_delete.png',
    automaticPageSize: true,
    initComponent: function () {
    	this.callParent();
    }
});