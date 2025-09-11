/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ItemApiPayloadMetaPage } from "./ItemApiPayloadMetaPage";
import { ItemApiPayloadMetaSchema } from "./ItemApiPayloadMetaSchema";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Additional metadata about a collection of datastore items, including pagination and schema information.
 */
export class ItemApiPayloadMeta {
  /**
   * Pagination information for a collection of datastore items.
   */
  "page"?: ItemApiPayloadMetaPage;
  /**
   * Schema information about the datastore, including its primary key and field definitions.
   */
  "schema"?: ItemApiPayloadMetaSchema;

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
    page: {
      baseName: "page",
      type: "ItemApiPayloadMetaPage",
    },
    schema: {
      baseName: "schema",
      type: "ItemApiPayloadMetaSchema",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ItemApiPayloadMeta.attributeTypeMap;
  }

  public constructor() {}
}
