import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationResponseForwardDestinationGoogleSecurityOperationsType } from "./CustomDestinationResponseForwardDestinationGoogleSecurityOperationsType";
import { CustomDestinationResponseGoogleSecurityOperationsDestinationAuth } from "./CustomDestinationResponseGoogleSecurityOperationsDestinationAuth";

/**
 * The Google Security Operations destination.
 */
export class CustomDestinationResponseForwardDestinationGoogleSecurityOperations {
  /**
   * Google Security Operations destination authentication.
   */
  "auth": CustomDestinationResponseGoogleSecurityOperationsDestinationAuth;
  /**
   * The customer ID of the Google Security Operations account.
   */
  "customerId": string;
  /**
   * The namespace of the Google Security Operations account.
   */
  "namespace": string;
  /**
   * The `CustomDestinationResponseForwardDestinationGoogleSecurityOperations` `regional_endpoint`.
   */
  "regionalEndpoint": string;
  /**
   * Type of the Google Security Operations destination.
   */
  "type": CustomDestinationResponseForwardDestinationGoogleSecurityOperationsType;
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
    auth: {
      baseName: "auth",
      type: "CustomDestinationResponseGoogleSecurityOperationsDestinationAuth",
      required: true,
    },
    customerId: {
      baseName: "customer_id",
      type: "string",
      required: true,
    },
    namespace: {
      baseName: "namespace",
      type: "string",
      required: true,
    },
    regionalEndpoint: {
      baseName: "regional_endpoint",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationResponseForwardDestinationGoogleSecurityOperationsType",
      required: true,
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
    return CustomDestinationResponseForwardDestinationGoogleSecurityOperations.attributeTypeMap;
  }

  public constructor() {}
}
