# Sitecore RAZL

This project is used to integrate RAZL into XmCloud.

To setup the connection with RAZL Desktop you need to follow these steps:
-Via Razl Connection Wizard start configuring a new connection;
-Choose type - Package Connections;
-Take generated string from Access Guid field and put it in Web.Config inside _CMP folder 
<HedgehogDevelopment.Razl.Service.Configuration accessGuid="{access_guid}" />
-If needed specify project to build in xmcloud.build.json under buildTargets;
-Make a deployment with configured RAZL module;
-After deployment will be completed test your connection with RAZL Desktop app;


