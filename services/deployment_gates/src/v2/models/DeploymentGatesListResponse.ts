import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGateResponseData } from "./DeploymentGateResponseData";
import { DeploymentGatesListResponseMeta } from "./DeploymentGatesListResponseMeta";

/**
 * Response containing a paginated list of deployment gates.
 */
export class DeploymentGatesListResponse {
  /**
   * Array of deployment gates.
   */
  "data"?: Array<DeploymentGateResponseData>;
  /**
   * Metadata for a list of deployment gates response.
   */
  "meta"?: DeploymentGatesListResponseMeta;
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
    data: {
      baseName: "data",
      type: "Array<DeploymentGateResponseData>",
    },
    meta: {
      baseName: "meta",
      type: "DeploymentGatesListResponseMeta",
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
    return DeploymentGatesListResponse.attributeTypeMap;
  }

  public constructor() {}
}
