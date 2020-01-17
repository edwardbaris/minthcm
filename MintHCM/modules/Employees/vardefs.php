<?php

if ( !defined('sugarEntry') || !sugarEntry ) {
   die('Not A Valid Entry Point');
}
/**
 *
 * SugarCRM Community Edition is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.
 *
 * SuiteCRM is an extension to SugarCRM Community Edition developed by SalesAgility Ltd.
 * Copyright (C) 2011 - 2018 SalesAgility Ltd.
 *
 * MintHCM is a Human Capital Management software based on SuiteCRM developed by MintHCM, 
 * Copyright (C) 2018-2019 MintHCM
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SUGARCRM, SUGARCRM DISCLAIMS THE WARRANTY
 * OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along with
 * this program; if not, see http://www.gnu.org/licenses or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 *
 * You can contact SugarCRM, Inc. headquarters at 10050 North Wolfe Road,
 * SW2-130, Cupertino, CA 95014, USA. or at email address contact@sugarcrm.com.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU Affero General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "Powered by SugarCRM" 
 * logo and "Supercharged by SuiteCRM" logo and "Reinvented by MintHCM" logo. 
 * If the display of the logos is not reasonably feasible for technical reasons, the 
 * Appropriate Legal Notices must display the words "Powered by SugarCRM" and 
 * "Supercharged by SuiteCRM" and "Reinvented by MintHCM".
 */
global $dictionary;
if ( empty($dictionary['User']) ) {
   include('modules/Users/vardefs.php');
}
$dictionary['Employee'] = $dictionary['User'];
//users of employees modules are not allowed to change the employee/user status.
$dictionary['Employee']['fields']['status']['massupdate'] = false;
$dictionary['Employee']['fields']['is_admin']['massupdate'] = false;
//begin bug 48033
$dictionary['Employee']['fields']['UserType']['massupdate'] = false;
$dictionary['Employee']['fields']['messenger_type']['massupdate'] = false;
$dictionary['Employee']['fields']['email_link_type']['massupdate'] = false;
//end bug 48033
$dictionary['Employee']['fields']['email1']['required'] = false;
$dictionary['Employee']['fields']['email_addresses']['required'] = false;
$dictionary['Employee']['fields']['email_addresses_primary']['required'] = false;
// bugs 47553 & 49716
$dictionary['Employee']['fields']['status']['studio'] = false;
$dictionary['Employee']['fields']['status']['required'] = false;


$dictionary["Employee"]["fields"]["spenttime"] = array(
   'name' => 'spenttime',
   'type' => 'link',
   'relationship' => 'spenttime_employees',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_USERS_SPENT_TIME_TITLE',
);
$dictionary["Employee"]["fields"]["contracts"] = array(
   'name' => 'contracts',
   'type' => 'link',
   'relationship' => 'contracts_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_CONTRACTS',
);
$dictionary["Employee"]["fields"]["resources"] = array(
   'name' => 'resources',
   'type' => 'link',
   'relationship' => 'resources_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_RESOURCES',
);
$dictionary["Employee"]["fields"]["reservations"] = array(
   'name' => 'reservations',
   'type' => 'link',
   'relationship' => 'reservations_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_RESERVATIONS',
);
$dictionary["Employee"]["fields"]["periodsofemployment"] = array(
   'name' => 'periodsofemployment',
   'type' => 'link',
   'relationship' => 'periodsofemployment_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_PERIODSOFEMPLOYMENT',
);

$dictionary["Employee"]["fields"]["goals"] = array(
   'name' => 'goals',
   'type' => 'link',
   'relationship' => 'goals_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_GOALS',
);
$dictionary["Employee"]["fields"]["appraisals"] = array(
   'name' => 'appraisals',
   'type' => 'link',
   'relationship' => 'appraisals_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_APPRAISALS',
);
$dictionary["Employee"]["fields"]["roles"] = array(
   'name' => 'roles',
   'type' => 'link',
   'relationship' => 'roles_employees',
   'source' => 'non-db',
   'module' => 'EmployeeRoles',
   'bean_name' => 'EmployeeRoles',
   'vname' => 'LBL_ROLES',
);
$dictionary["Employee"]["fields"]["benefits"] = array(
   'name' => 'benefits',
   'type' => 'link',
   'relationship' => 'benefits_employees',
   'source' => 'non-db',
   'module' => 'Benefits',
   'bean_name' => 'Benefits',
   'vname' => 'LBL_RESPONSIBILITIES',
);
$dictionary["Employee"]["fields"]["onboardings"] = array(
   'name' => 'onboardings',
   'type' => 'link',
   'relationship' => 'onboardings_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_ONBOARDINGS',
);
$dictionary["Employee"]["fields"]["offboardings"] = array(
   'name' => 'offboardings',
   'type' => 'link',
   'relationship' => 'offboardings_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_OFFBOARDINGS',
);
$dictionary["Employee"]["fields"]["competencyratings"] = array(
   'name' => 'competencyratings',
   'type' => 'link',
   'relationship' => 'competencyratings_employee',
   'module' => 'CompetencyRatings',
   'bean_name' => 'CompetencyRatings',
   'source' => 'non-db',
   'vname' => 'LBL_COMPETENCYRATINGS',
);
$dictionary["Employee"]["fields"]["organizationalunits"] = array(
   'name' => 'organizationalunits',
   'type' => 'link',
   'relationship' => 'employees_organizationalunits',
   'source' => 'non-db',
   'module' => 'OrganizationalUnits',
   'bean_name' => 'OrganizationalUnits',
   'vname' => 'LBL_RELATIONSHIP_ORGANIZATIONALUNITS_NAME',
   'side' => 'right',
);
$dictionary["Employee"]["fields"]["certificates"] = array(
   'name' => 'certificates',
   'type' => 'link',
   'relationship' => 'certificates_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_CERTIFICATES',
);
$dictionary["Employee"]["fields"]["applications"] = array(
   'name' => 'applications',
   'type' => 'link',
   'relationship' => 'applications_employee',
   'source' => 'non-db',
   'side' => 'right',
   'vname' => 'LBL_APPLICATIONS_SUBPANEL',
);
