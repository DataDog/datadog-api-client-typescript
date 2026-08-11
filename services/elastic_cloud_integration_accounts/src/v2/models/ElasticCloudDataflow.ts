import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ElasticCloudDataflowId } from "./ElasticCloudDataflowId";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";

/**
 * An Elastic Cloud dataflow toggle. The set of dataflow ids is fixed by the interface schema.
 */
export class ElasticCloudDataflow {
  /**
   * Whether the dataflow is enabled.
   */
  "enabled"?: boolean;
  /**
   * Identifier of an Elastic Cloud dataflow.
   */
  "id": ElasticCloudDataflowId;
  /**
   * Read-only, server-computed collection status of a dataflow.
   */
  "status"?: IntegrationAccountDataflowStatus;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    id: {
      baseName: "id",
      type: "ElasticCloudDataflowId",
      required: true,
    },
    status: {
      baseName: "status",
      type: "IntegrationAccountDataflowStatus",
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
    return ElasticCloudDataflow.attributeTypeMap;
  }

  public constructor() {}
}
