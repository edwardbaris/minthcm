<?php


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

$layout_defs['Employees'] = array(
   'subpanel_setup' => array(
      "spenttime" => array(
         'order' => 100,
         'module' => 'SpentTime',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_USERS_SPENT_TIME_TITLE',
         'get_subpanel_data' => 'spenttime',
         'top_buttons' => array(),
      ),
      "contracts" => array(
         'order' => 100,
         'module' => 'Contracts',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_CONTRACTS',
         'get_subpanel_data' => 'contracts',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
         ),
      ),
      "certificates" => array(
         'order' => 100,
         'module' => 'Certificates',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_CERTIFICATES',
         'get_subpanel_data' => 'certificates',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
            array(
               'widget_class' => 'SubPanelTopSelectButton',
               'mode' => 'MultiSelect',
            ),
         ),
      ),
      "reservations" => array(
         'order' => 100,
         'module' => 'Reservations',
         'subpanel_name' => 'nonRemovable',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_RESERVATIONS',
         'get_subpanel_data' => 'reservations',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
         ),
      ),
      "periodsofemployment" => array(
         'order' => 100,
         'module' => 'PeriodsOfEmployment',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_PERIODSOFEMPLOYMENT',
         'get_subpanel_data' => 'periodsofemployment',
         'top_buttons' => array(),
      ),
      "goals" => array(
         'order' => 100,
         'module' => 'Goals',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_GOALS',
         'get_subpanel_data' => 'goals',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
            array(
               'widget_class' => 'SubPanelTopSelectButton',
               'mode' => 'MultiSelect',
            ),
         ),
      ),
      "appraisals" => array(
         'order' => 100,
         'module' => 'Appraisals',
         'subpanel_name' => 'noCreateNoRemove',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_APPRAISALS',
         'get_subpanel_data' => 'appraisals',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
         ),
      ),
      'roles' => array(
         'order' => 100,
         'module' => 'EmployeeRoles',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_ROLES',
         'get_subpanel_data' => 'roles',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
            array(
               'widget_class' => 'SubPanelTopSelectButton',
               'mode' => 'MultiSelect',
            ),
         ),
      ),
      'benefits' => array(
         'order' => 100,
         'module' => 'Benefits',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_BENEFITS',
         'get_subpanel_data' => 'benefits',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
            array(
               'widget_class' => 'SubPanelTopSelectButton',
               'mode' => 'MultiSelect',
            ),
         ),
      ),
      'responsibilities_employee' => array(
         'order' => 100,
         'module' => 'Responsibilities',
         'subpanel_name' => 'for_Employees',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_RESPONSIBILITIES',
         'get_subpanel_data' => 'function:fetchAllResponsibilities',
         'top_buttons' => array(),
      ),
      "onboardings" => array(
         'order' => 100,
         'module' => 'Onboardings',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_ONBOARDINGS',
         'get_subpanel_data' => 'onboardings',
         'top_buttons' => array(),
      ),
      "offboardings" => array(
         'order' => 100,
         'module' => 'Offboardings',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_OFFBOARDINGS',
         'get_subpanel_data' => 'offboardings',
         'top_buttons' => array(),
      ),
      "competencyratings" => array(
         'order' => 100,
         'module' => 'CompetencyRatings',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_COMPETENCYRATINGS',
         'get_subpanel_data' => 'competencyratings',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
         ),
      ),
      'organizationalunits' => array(
         'order' => 100,
         'module' => 'OrganizationalUnits',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_RELATIONSHIP_ORGANIZATIONALUNITS_NAME',
         'get_subpanel_data' => 'organizationalunits',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
            array(
               'widget_class' => 'SubPanelTopSelectButton',
               'mode' => 'MultiSelect',
            ),
         ),
      ),
      'applications' => array(
         'order' => 100,
         'module' => 'Applications',
         'subpanel_name' => 'default',
         'sort_order' => 'asc',
         'sort_by' => 'id',
         'title_key' => 'LBL_APPLICATIONS_SUBPANEL',
         'get_subpanel_data' => 'applications',
         'top_buttons' => array(
            array(
               'widget_class' => 'SubPanelTopButtonQuickCreate',
            ),
         ),
      ),
   ));
