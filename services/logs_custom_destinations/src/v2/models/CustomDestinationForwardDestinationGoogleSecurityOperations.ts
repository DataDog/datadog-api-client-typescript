import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationForwardDestinationGoogleSecurityOperationsType } from "./CustomDestinationForwardDestinationGoogleSecurityOperationsType";
import { CustomDestinationGoogleSecurityOperationsDestinationAuth } from "./CustomDestinationGoogleSecurityOperationsDestinationAuth";

/**
 * The Google Security Operations destination.
 */
export class CustomDestinationForwardDestinationGoogleSecurityOperations {
  /**
   * Google Security Operations destination authentication.
   */
  "auth": CustomDestinationGoogleSecurityOperationsDestinationAuth;
  /**
   * The customer ID of the Google Security Operations account.
   */
  "customerId": string;
  /**
   * The namespace of the Google Security Operations account.
   */
  "namespace": string;
  /**
   * The `CustomDestinationForwardDestinationGoogleSecurityOperations` `regional_endpoint`.
   */
  "regionalEndpoint": string;
  /**
   * Type of the Google Security Operations destination.
   */
  "type": CustomDestinationForwardDestinationGoogleSecurityOperationsType;
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
      type: "CustomDestinationGoogleSecurityOperationsDestinationAuth",
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
      type: "CustomDestinationForwardDestinationGoogleSecurityOperationsType",
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
    return CustomDestinationForwardDestinationGoogleSecurityOperations.attributeTypeMap;
  }

  public constructor() {}
}
