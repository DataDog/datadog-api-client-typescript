/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsQueryDefinition } from "./CommitmentsQueryDefinition";
import { CommitmentsScalarColumn } from "./CommitmentsScalarColumn";
import { CommitmentsUnusedCostMeta } from "./CommitmentsUnusedCostMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a scalar savings response.
 */
export class CommitmentsSavingsScalarResponseAttributes {
  /**
   * Array of scalar columns in the response.
   */
  "columns": Array<CommitmentsScalarColumn>;
  /**
   * Metadata reporting that the cost data lacks the unused costs of some commitments, as with Azure exports
   * scoped below the billing profile. Utilization is then overstated, and realized savings and effective
   * savings rate are upper bounds. Omitted when the unused costs are available.
   */
  "meta"?: CommitmentsUnusedCostMeta;
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
    columns: {
      baseName: "columns",
      type: "Array<CommitmentsScalarColumn>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CommitmentsUnusedCostMeta",
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
    return CommitmentsSavingsScalarResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
