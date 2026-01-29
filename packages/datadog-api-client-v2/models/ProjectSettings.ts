/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AutoCloseInactiveCases } from "./AutoCloseInactiveCases";
import { AutoTransitionAssignedCases } from "./AutoTransitionAssignedCases";
import { IntegrationIncident } from "./IntegrationIncident";
import { IntegrationJira } from "./IntegrationJira";
import { IntegrationMonitor } from "./IntegrationMonitor";
import { IntegrationOnCall } from "./IntegrationOnCall";
import { IntegrationServiceNow } from "./IntegrationServiceNow";
import { ProjectNotificationSettings } from "./ProjectNotificationSettings";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Project settings
 */
export class ProjectSettings {
  /**
   * Auto-close inactive cases settings
   */
  "autoCloseInactiveCases"?: AutoCloseInactiveCases;
  /**
   * Auto-transition assigned cases settings
   */
  "autoTransitionAssignedCases"?: AutoTransitionAssignedCases;
  /**
   * Incident integration settings
   */
  "integrationIncident"?: IntegrationIncident;
  /**
   * Jira integration settings
   */
  "integrationJira"?: IntegrationJira;
  /**
   * Monitor integration settings
   */
  "integrationMonitor"?: IntegrationMonitor;
  /**
   * On-Call integration settings
   */
  "integrationOnCall"?: IntegrationOnCall;
  /**
   * ServiceNow integration settings
   */
  "integrationServiceNow"?: IntegrationServiceNow;
  /**
   * Project notification settings
   */
  "notification"?: ProjectNotificationSettings;

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
    autoCloseInactiveCases: {
      baseName: "auto_close_inactive_cases",
      type: "AutoCloseInactiveCases",
    },
    autoTransitionAssignedCases: {
      baseName: "auto_transition_assigned_cases",
      type: "AutoTransitionAssignedCases",
    },
    integrationIncident: {
      baseName: "integration_incident",
      type: "IntegrationIncident",
    },
    integrationJira: {
      baseName: "integration_jira",
      type: "IntegrationJira",
    },
    integrationMonitor: {
      baseName: "integration_monitor",
      type: "IntegrationMonitor",
    },
    integrationOnCall: {
      baseName: "integration_on_call",
      type: "IntegrationOnCall",
    },
    integrationServiceNow: {
      baseName: "integration_service_now",
      type: "IntegrationServiceNow",
    },
    notification: {
      baseName: "notification",
      type: "ProjectNotificationSettings",
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
    return ProjectSettings.attributeTypeMap;
  }

  public constructor() {}
}
