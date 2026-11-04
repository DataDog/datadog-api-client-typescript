/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable } from "./ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable";
import { ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake } from "./ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Type-specific configuration of the connection. Only the field matching the connection type is set.
 */
export class ListConnectionsResponseDataAttributesConnectionsItemsDetails {
  /**
   * Configuration of a reference table connection.
   */
  "refTable"?: ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable;
  /**
   * Configuration of a Snowflake connection.
   */
  "snowflake"?: ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake;

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
    refTable: {
      baseName: "ref_table",
      type: "ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable",
    },
    snowflake: {
      baseName: "snowflake",
      type: "ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake",
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
    return ListConnectionsResponseDataAttributesConnectionsItemsDetails.attributeTypeMap;
  }

  public constructor() {}
}
