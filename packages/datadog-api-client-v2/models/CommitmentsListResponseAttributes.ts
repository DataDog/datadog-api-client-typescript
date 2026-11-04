/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsListItem } from "./CommitmentsListItem";
import { CommitmentsListMeta } from "./CommitmentsListMeta";
import { CommitmentsQueryDefinition } from "./CommitmentsQueryDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a commitments list response.
 */
export class CommitmentsListResponseAttributes {
  /**
   * Array of commitment items.
   */
  "commitments": Array<CommitmentsListItem>;
  /**
   * Metadata for a commitments list response.
   */
  "meta"?: CommitmentsListMeta;
  /**
   * The query that produces the response values, in the same format as dashboard and notebook widget
   * requests, so a client can graph the values in a widget. Each formula's `id` names the response value
   * that it produces.
   */
  "queryDefinition"?: CommitmentsQueryDefinition;

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
    commitments: {
      baseName: "commitments",
      type: "Array<CommitmentsListItem>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CommitmentsListMeta",
    },
    queryDefinition: {
      baseName: "query_definition",
      type: "CommitmentsQueryDefinition",
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
    return CommitmentsListResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
