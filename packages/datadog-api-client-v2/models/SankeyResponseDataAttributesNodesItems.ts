/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SankeyResponseDataAttributesNodesItemsAggregatedNodesItems } from "./SankeyResponseDataAttributesNodesItemsAggregatedNodesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class SankeyResponseDataAttributesNodesItems {
  "aggregatedNodes"?: Array<SankeyResponseDataAttributesNodesItemsAggregatedNodesItems>;
  "column"?: number;
  "id"?: string;
  "incomingValue"?: number;
  "name"?: string;
  "outgoingValue"?: number;
  "type"?: string;
  "value"?: number;

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
    aggregatedNodes: {
      baseName: "aggregated_nodes",
      type: "Array<SankeyResponseDataAttributesNodesItemsAggregatedNodesItems>",
    },
    column: {
      baseName: "column",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    incomingValue: {
      baseName: "incoming_value",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    outgoingValue: {
      baseName: "outgoing_value",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "int64",
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
    return SankeyResponseDataAttributesNodesItems.attributeTypeMap;
  }

  public constructor() {}
}
