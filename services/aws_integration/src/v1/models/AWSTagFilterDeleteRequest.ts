import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSNamespace } from "./AWSNamespace";

/**
 * The objects used to delete an AWS tag filter entry.
 */
export class AWSTagFilterDeleteRequest {
  /**
   * The unique identifier of your AWS account.
   */
  "accountId"?: string;
  /**
   * The namespace associated with the tag filter entry.
   */
  "namespace"?: AWSNamespace;
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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    namespace: {
      baseName: "namespace",
      type: "AWSNamespace",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSTagFilterDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
