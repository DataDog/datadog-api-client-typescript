/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityData } from "./EntityData";
import { ListRelationCatalogResponseLinks } from "./ListRelationCatalogResponseLinks";
import { RelationResponse } from "./RelationResponse";
import { RelationResponseMeta } from "./RelationResponseMeta";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * List entity relation response.
*/
export class ListRelationCatalogResponse {
  /**
   * Array of relation responses
  */
  "data"?: Array<RelationResponse>;
  /**
   * List relation response included entities.
  */
  "included"?: Array<EntityData>;
  /**
   * List relation response links.
  */
  "links"?: ListRelationCatalogResponseLinks;
  /**
   * Relation response metadata.
  */
  "meta"?: RelationResponseMeta;

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
    "data": {
      "baseName": "data",
      "type": "Array<RelationResponse>",
    },
    "included": {
      "baseName": "included",
      "type": "Array<EntityData>",
    },
    "links": {
      "baseName": "links",
      "type": "ListRelationCatalogResponseLinks",
    },
    "meta": {
      "baseName": "meta",
      "type": "RelationResponseMeta",
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




    return ListRelationCatalogResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









