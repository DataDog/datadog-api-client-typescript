/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType } from "./CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Google Security Operations destination authentication.
 */
export class CustomDestinationResponseGoogleSecurityOperationsDestinationAuth {
  /**
   * The Google Security Operations client email.
   */
  "clientEmail": string;
  /**
   * Google Security Operations project ID.
   */
  "projectId": string;
  /**
   * Type of the Google Security Operations destination authentication.
   */
  "type": CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType;

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
    clientEmail: {
      baseName: "client_email",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType",
      required: true,
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
    return CustomDestinationResponseGoogleSecurityOperationsDestinationAuth.attributeTypeMap;
  }

  public constructor() {}
}
