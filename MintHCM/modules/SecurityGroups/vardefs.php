<?php

$dictionary['SecurityGroup'] = [
   'table' => 'securitygroups',
   'audited' => true,
   'fields' => [
      'noninheritable' => [
         'name' => 'noninheritable',
         'vname' => 'LBL_NONINHERITABLE',
         'type' => 'bool',
         'reportable' => false,
         'comment' => 'Indicator for whether a group can be inherited by a record'
      ],
      'users' => [
         'name' => 'users',
         'type' => 'link',
         'relationship' => 'securitygroups_users',
         'source' => 'non-db',
         'vname' => 'LBL_USERS',
      ],
      'aclroles' => [
         'name' => 'aclroles',
         'type' => 'link',
         'relationship' => 'securitygroups_acl_roles',
         'source' => 'non-db',
         'vname' => 'LBL_ROLES',
      ],
      /** related editable fields with Users module */
      'securitygroup_noninher_fields' => [
         'name' => 'securitygroup_noninher_fields',
         'rname' => 'id',
         'relationship_fields' => [
            'id' => 'securitygroup_noninherit_id',
            'noninheritable' => 'securitygroup_noninheritable',
            'primary_group' => 'securitygroup_primary_group'
         ],
         'vname' => 'LBL_USER_NAME',
         'type' => 'relate',
         'link' => 'users',
         'link_type' => 'relationship_info',
         'source' => 'non-db',
         'Importable' => false,
         'duplicate_merge' => 'disabled',
      ],
      'securitygroup_noninherit_id' => [
         'name' => 'securitygroup_noninherit_id',
         'type' => 'varchar',
         'source' => 'non-db',
         'vname' => 'LBL_securitygroup_noninherit_id',
      ],
      'securitygroup_noninheritable' => [
         'name' => 'securitygroup_noninheritable',
         'type' => 'bool',
         'source' => 'non-db',
         'vname' => 'LBL_SECURITYGROUP_NONINHERITABLE',
      ],
      'securitygroup_primary_group' => [
         'name' => 'securitygroup_primary_group',
         'type' => 'bool',
         'source' => 'non-db',
         'vname' => 'LBL_PRIMARY_GROUP',
      ],
      'group_type' => [
         'required' => false,
         'name' => 'group_type',
         'vname' => 'LBL_GROUP_TYPE',
         'type' => 'enum',
         'massupdate' => false,
         'default' => 'standard',
         'no_default' => false,
         'comments' => '',
         'help' => '',
         'importable' => 'true',
         'duplicate_merge' => 'disabled',
         'duplicate_merge_dom_value' => '0',
         'audited' => true,
         'reportable' => true,
         'unified_search' => false,
         'merge_filter' => 'disabled',
         'calculated' => false,
         'len' => 100,
         'size' => '20',
         'options' => 'group_type_list',
         'studio' => 'visible',
      ],
   ],
   'relationships' => [
   ],
   'optimistic_lock' => true,
];
require_once('include/SugarObjects/VardefManager.php');
VardefManager::createVardef('SecurityGroups', 'SecurityGroup', ['basic', 'assignable']);
