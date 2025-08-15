/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationRelationshipsRespondersDataItems } from "./EscalationRelationshipsRespondersDataItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Lists the users involved in a specific step of the escalation policy.
 */
export class EscalationRelationshipsResponders {
  /**
   * Array of user references assigned as responders for this escalation step.
   */
  "data"?: Array<EscalationRelationshipsRespondersDataItems>;

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
      type: "Array<EscalationRelationshipsRespondersDataItems>",
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
    return EscalationRelationshipsResponders.attributeTypeMap;
  }

  public constructor() {}
}
