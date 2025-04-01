/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Sorting options for AuthN Mappings.
*/

export type AuthNMappingsSort = typeof CREATED_AT_ASCENDING| typeof CREATED_AT_DESCENDING| typeof ROLE_ID_ASCENDING| typeof ROLE_ID_DESCENDING| typeof SAML_ASSERTION_ATTRIBUTE_ID_ASCENDING| typeof SAML_ASSERTION_ATTRIBUTE_ID_DESCENDING| typeof ROLE_NAME_ASCENDING| typeof ROLE_NAME_DESCENDING| typeof SAML_ASSERTION_ATTRIBUTE_KEY_ASCENDING| typeof SAML_ASSERTION_ATTRIBUTE_KEY_DESCENDING| typeof SAML_ASSERTION_ATTRIBUTE_VALUE_ASCENDING| typeof SAML_ASSERTION_ATTRIBUTE_VALUE_DESCENDING | UnparsedObject;
export const CREATED_AT_ASCENDING = 'created_at';
export const CREATED_AT_DESCENDING = '-created_at';
export const ROLE_ID_ASCENDING = 'role_id';
export const ROLE_ID_DESCENDING = '-role_id';
export const SAML_ASSERTION_ATTRIBUTE_ID_ASCENDING = 'saml_assertion_attribute_id';
export const SAML_ASSERTION_ATTRIBUTE_ID_DESCENDING = '-saml_assertion_attribute_id';
export const ROLE_NAME_ASCENDING = 'role.name';
export const ROLE_NAME_DESCENDING = '-role.name';
export const SAML_ASSERTION_ATTRIBUTE_KEY_ASCENDING = 'saml_assertion_attribute.attribute_key';
export const SAML_ASSERTION_ATTRIBUTE_KEY_DESCENDING = '-saml_assertion_attribute.attribute_key';
export const SAML_ASSERTION_ATTRIBUTE_VALUE_ASCENDING = 'saml_assertion_attribute.attribute_value';
export const SAML_ASSERTION_ATTRIBUTE_VALUE_DESCENDING = '-saml_assertion_attribute.attribute_value';