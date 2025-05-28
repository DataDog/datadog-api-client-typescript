/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppDefinitionType } from "./AppDefinitionType";
import { AppMeta } from "./AppMeta";
import { ListAppsResponseDataItemsAttributes } from "./ListAppsResponseDataItemsAttributes";
import { ListAppsResponseDataItemsRelationships } from "./ListAppsResponseDataItemsRelationships";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * An app definition object. This contains only basic information about the app such as ID, name, and tags.
*/
export class ListAppsResponseDataItems {
  /**
   * Basic information about the app such as name, description, and tags.
  */
  "attributes": ListAppsResponseDataItemsAttributes;
  /**
   * The ID of the app.
  */
  "id": string;
  /**
   * Metadata of an app.
  */
  "meta"?: AppMeta;
  /**
   * The app's publication information.
  */
  "relationships"?: ListAppsResponseDataItemsRelationships;
  /**
   * The app definition type.
  */
  "type": AppDefinitionType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "attributes": {
      "baseName": "attributes",
      "type": "ListAppsResponseDataItemsAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
      "format": "uuid",
    },
    "meta": {
      "baseName": "meta",
      "type": "AppMeta",
    },
    "relationships": {
      "baseName": "relationships",
      "type": "ListAppsResponseDataItemsRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "AppDefinitionType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ListAppsResponseDataItems.attributeTypeMap;

  }

  public constructor() {











  }
}









